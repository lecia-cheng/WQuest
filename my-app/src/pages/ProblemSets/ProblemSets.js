import React, { useEffect, useState } from "react";
// Importing Link from react-router-dom to
// navigate to different end points.
import ProblemSetMenu from "../../components/problemsets/problemsetmenu.js";
import ProblemSetList from "../../components/problemsets/problemsetlist.js";
import Calendar from "react-calendar";

const ProblemSets = () => {
	const [value, onChange] = useState(new Date());
	return (
		<div className="container">
			ProblemSets
			<div className="grid grid-cols-4 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
				<div className="z-base col-span-4 md:col-span-2 lg:col-span-3">
					<ProblemSetMenu />
					<ProblemSetList />
				</div>
				<div className="col-span-4 md:col-span-1">
					<Calendar
						onChange={onChange}
						value={value}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProblemSets;
