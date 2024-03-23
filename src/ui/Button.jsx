import { prototype } from "postcss/lib/previous-map";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
    const className = "mt-5 rounded-full bg-yellow-300 p-3 px-5 font-semibold uppercase tracking-wide transition-all hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed";

    if(to)return <Link to={to} className={className}>{children}</Link>
  
    return (
    <button
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  to: prototype.node,
  children: PropTypes.node,
  disabled: PropTypes.node,
};
