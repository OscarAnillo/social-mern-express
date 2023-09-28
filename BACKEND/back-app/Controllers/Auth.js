import bcrypt from 'bcrypt'
import User from '../Model/User.js';

/* Register User */
export const register = async (req, res) => {
    try {
        const { 
            firstName, 
            lastName, 
            email, 
            password, 
            picturePath, 
            location, 
            occupation 
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName, 
            lastName, 
            email, 
            password : passwordHash, 
            picturePath, 
            location, 
            occupation
        })

        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

/* Login */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email});
        if(!user) return res.status(404).json({ message: "User does not exist."})
        
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({ msg: "Invalid password."})
        delete user.password
        res.status(200).json(user)
    } catch(err) {
        res.status(500).json({ message: err.message})
    }
}