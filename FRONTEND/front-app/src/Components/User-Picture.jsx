import PropTypes from "prop-types";

export const UserPicture = ({ image, size = "100px" }) => {
  return <img src={image} alt="" height={size} width={size} />;
};

UserPicture.propTypes = {
  image: PropTypes.string,
  size: PropTypes.string,
};
