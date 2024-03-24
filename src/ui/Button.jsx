import { prototype } from "postcss/lib/previous-map";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "mt-5 rounded-full bg-yellow-300 font-semibold uppercase tracking-wide transition-all hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "mt-5 rounded-full border-2 px-4 py-3 border-stone-300 text-stone-400 p-2 font-semibold uppercase tracking-wide transition-all hover:bg-stone-300 hover:text-white focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  to: prototype.node,
  children: PropTypes.node,
  disabled: PropTypes.node,
  type: PropTypes.node,
};
