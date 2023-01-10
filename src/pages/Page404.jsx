import React from "react";
import { Link } from "react-router-dom";
import "./Page404.scss";

import notFoundPage from "../assets/pagenotfound.svg";
import Button from "../components/Button/Button";

function Page404() {
	return (
		<div className="notfoundpage">
			<img src={notFoundPage} alt="" />
			<div className="notfoundpage-title">Lost your way?</div>
			<div className="notfoundpage-subtitle">
				{`Oops! This is awkward. You are looking for something that doesn't
          actually exist.`}
			</div>
			<div className="notfoundbage-button">
				<Link to="/">
					<Button name={"Go Home"} />
				</Link>
			</div>
		</div>
	);
}

export default Page404;
