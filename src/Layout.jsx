import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
