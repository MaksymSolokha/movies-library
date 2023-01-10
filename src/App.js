import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Movie from "./components/organisms/Movie/Movie";
import Layout from "./Layout";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Popular from "./pages/Popular";
import UpComing from "./pages/UpComing";
import NowPlaying from "./pages/NowPlaying";

function App() {
	return (
		<div className="App container">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="popular" element={<Popular />} />
					<Route path="now_playing" element={<NowPlaying />} />
					<Route path="upcoming" element={<UpComing />} />
					<Route path="/:movie/:id/" element={<Movie />} />
					<Route path="*" element={<Page404 />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
