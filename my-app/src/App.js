import "./App.css";
import HomePage from "./pages/Home/Home";
import LeaderBoard from "./pages/Leaderboard/Leaderboard";
import ProblemSets from "./pages/ProblemSets/ProblemSets";
import Test from "./pages/Test/Test";
// import twosum from "./pages/twosum/twosum";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<>
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/leaderboard"
						element={<LeaderBoard />}
					/>
					<Route
						path="/problemsets"
						element={<ProblemSets />}
					/>
					<Route
						path="/test"
						element={<Test />}
					/>
					<Route
						path="/twosum"
						element={<twosum />}
					></Route>
				</Routes>
			</>
		</div>
	);
}

export default App;
