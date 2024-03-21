import Topbar from "../../components/Topbar/Topbar";
import Workspace from "../../components/Workspace/Workspace";
import React from "react";


const twosum = ({ problem }) => {

	return (
		<div>
			<Topbar problemPage />
			<Workspace problem={problem} />
		</div>
	);
};
export default twosum;
