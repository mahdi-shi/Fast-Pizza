import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    "hover:text-blue-7 text-sm text-blue-500 transition-all duration-75 hover:text-blue-700 hover:underline";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;

LinkButton.propTypes = {
  children: PropTypes.node,
  to: PropTypes.node,
};
