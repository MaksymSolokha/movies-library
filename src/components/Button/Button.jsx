import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

function Button({ name, onClick }) {
	return (
		<button onClick={() => onClick} className="button">
			{name}
		</button>
	);
}

Button.propTypes = {
	name: PropTypes.string.isRequired,

	onClick: PropTypes.func.isRequired,
};

export default Button;
