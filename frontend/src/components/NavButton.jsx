import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

function NavButton({ pageName, onClick }) {
  // console.warn("onclick", onClick());
  return (
    <div className="navButton">
      <Link to={pageName}>
        <button type="button" onClick={onClick}>
          Navbutton{" "}
        </button>
        {/* <div>Navbutton </div> */}
      </Link>
    </div>
  );
}

NavButton.propTypes = {
  pageName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavButton;
