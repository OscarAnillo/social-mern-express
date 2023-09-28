import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    picturePath: "",
    location: "",
    occupation: "",
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const {
    firstName,
    lastName,
    email,
    password,
    picturePath,
    location,
    occupation,
  } = userInput;

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/auth/register", {
        firstName,
        lastName,
        email,
        password,
        picturePath,
        location,
        occupation,
      })
      .then((res) => {
        console.log(res.data);
        alert("Successful Registration");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="register-div">
      <h1 className="register-title">Register Page</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={changeHandler}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Occupation"
          name="occupation"
          onChange={changeHandler}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/">Log in</Link>
      </p>
    </div>
  );
};
