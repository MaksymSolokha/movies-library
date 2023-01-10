import React from "react";

import AllMovies from "../components/organisms/AllMovies/AllMovies";
import Info from "../components/Info/Info";
import Input from "../components/Input/Input";
import { useSelector } from "react-redux";
import EmptyList from "../components/EmptiList/EmptyList";

function Home() {
	const searchMovies = useSelector((state) => state.searchMovies.searchMovies);

	return (
		<div className="home" style={{ marginBottom: "80px" }}>
			<Info title="Maksym Solokha" />
			<Input placeholder="Search movie" />
			{searchMovies.length === 0 ? (
				<EmptyList />
			) : (
				<AllMovies movies={searchMovies} />
			)}
		</div>
	);
}

export default Home;
