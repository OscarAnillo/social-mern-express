import axios from 'axios';
const baseURL = "http://localhost:3005"

export const getUserServices = async () => {
    const res = await axios.get(baseURL);
    return res.data
}

export const loginService = async (user) => {
    const { email, password } = user;
    const res = await axios.post(`${baseURL}/auth/login`, {
        email,
        password
    })
    return res.data
}