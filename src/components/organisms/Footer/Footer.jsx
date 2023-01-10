import React from "react";
import logo from "../../../assets/logo.svg";
import "./Footer.scss";

function Footer() {
	return (
		<div className="footer">
			<img src={logo} alt="" />
			<div className="footer-text">
				{`Source code available on Github. Open for pull request. Clone and use
				personally. It's up to you.`}
			</div>
		</div>
	);
}

export default Footer;
