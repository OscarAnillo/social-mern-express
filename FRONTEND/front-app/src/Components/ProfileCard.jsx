import { UserPicture } from "./User-Picture";
import { BsPersonAdd } from "react-icons/bs";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { BiSolidLocationPlus } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";

export const ProfileCard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="card-div">
      <div className="card-div-row">
        <UserPicture image={user?.picturePath} />
        <div className="row-text">
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <p className="user-text">0 Friends</p>
        </div>
        <div>
          <BsPersonAdd />
        </div>
      </div>
      <hr />
      <div className="card-div-user">
        <BiSolidLocationPlus className="social-icon" />
        <p className="user-text">{user.location}</p>
      </div>
      <div className="card-div-user">
        <MdOutlineWork className="social-icon" />
        <p className="user-text">{user.occupation}</p>
      </div>
      <hr />
      <div className="social-container">
        <h4>Social Profiles</h4>
        <div className="card-div-row twitter">
          <BsTwitter className="social-icon" />
          <div className="social-div">
            <h5>Twitter</h5>
            <p className="user-text">Social Network</p>
          </div>
          <div>
            <BiEditAlt />
          </div>
        </div>
        <div className="card-div-row">
          <BsLinkedin className="social-icon" />
          <div className="social-div">
            <h5>LinkedIn</h5>
            <p className="user-text">Network Platform</p>
          </div>
          <div>
            <BiEditAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  user: PropTypes.object,
};
