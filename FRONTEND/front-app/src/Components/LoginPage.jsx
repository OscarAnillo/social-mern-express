import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setLogin } from "../Redux/Features/user-slice";
import PropTypes from "prop-types";

export const LoginPage = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const { email, password } = userInput;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please provide your credentials!");
    }
    axios
      .post("http://localhost:3005/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        dispatch(setLogin(res.data));
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
    setUserInput({
      name: "",
      password: "",
    });
  };

  return (
    <div className="login-div">
      <h1 className="login-title">Login Page</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={changeHandler}
        />
        <button>Login</button>
      </form>
      <p>
        Dont have an account? <Link to="/register">Register here!</Link>
      </p>
    </div>
  );
};

LoginPage.propTypes = {
  currentUser: PropTypes.object,
  setCurrentUser: PropTypes.func,
};
