import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../Redux/Features/user-slice";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch(setLogout());
    navigate("/");
  };

  return (
    <div className="nav-bar">
      <h1>Social Card Profile</h1>
      {user !== null && <button onClick={clickHandler}>LogOut</button>}
    </div>
  );
};
