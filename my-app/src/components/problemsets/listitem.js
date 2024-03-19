import React, { useEffect } from "react";
// Importing Link from react-router-dom to
// navigate to different end points.
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ListItem = () => {
	return (
		<div
			role="row"
			className="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
			style={{ display: "flex", flex: "1 0 auto", minWidth: "0px" }}
		>
			<div
				role="cell"
				className="mx-2 flex items-center py-[11px]"
				style={{
					boxSizing: "border-box",
					flex: "52 0 auto",
					minWidth: "0px",
					width: "52px",
				}}
			>
				<a href="LINK">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="1em"
						height="1em"
						fill="currentColor"
						className="h-[18px] w-[18px] cursor-pointer text-green-s dark:text-dark-green-s"
					>
						<path
							fill-rule="evenodd"
							d="M19 11.063V7h-2v1a1 1 0 11-2 0V7H9v1a1 1 0 01-2 0V7H5v4.063h14zm0 2H5V19h14v-5.938zM9 5h6V4a1 1 0 112 0v1h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2V4a1 1 0 012 0v1z"
							clip-rule="evenodd"
						></path>
					</svg>
				</a>
			</div>
			<div
				role="cell"
				className="mx-2 flex items-center py-[11px]"
				style={{
					boxSizing: "border-box",
					flex: "260 0 auto",
					minWidth: "0px",
					width: "260px",
					cursor: "pointer",
				}}
			>
				<div className="max-w-[302px] flex items-center overflow-hidden">
					<div className="overflow-hidden">
						<div className="flex items-center">
							<div className="truncate">
								<a
									href="LINK"
									className="h-5 hover:text-blue-s dark:hover:text-dark-blue-s"
								>
									543. Diameter of Binary Tree
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				role="cell"
				className="mx-2 flex items-center py-[11px]"
				style={{
					boxSizing: "border-box",
					flex: "54 0 auto",
					minWidth: "0px",
					width: "54px",
				}}
			>
				<a
					aria-label="solution"
					href="LINK"
					className="truncate"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="1em"
						height="1em"
						fill="currentColor"
						className="text-blue dark:text-dark-blue h-5 w-5"
					>
						<path d="M15.207 11.293a1 1 0 010 1.414l-3.5 3.5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 14.086l2.793-2.793a1 1 0 011.414 0z"></path>
						<path d="M4 5a3 3 0 013-3h7.039a3 3 0 012.342 1.126l2.962 3.701A3 3 0 0120 8.702V19a3 3 0 01-3 3H7a3 3 0 01-3-3V5zm3-1a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V9h-3a2 2 0 01-2-2V4H7zm8 .6V7h1.92L15 4.6z"></path>
					</svg>
				</a>
			</div>
			<div
				role="cell"
				className="mx-2 flex items-center py-[11px]"
				style={{
					boxSizing: "border-box",
					flex: "84 0 auto",
					minWidth: "0px",
					width: "84px",
					cursor: "pointer",
				}}
			>
				<span>59.8%</span>
			</div>
			<div
				role="cell"
				className="mx-2 flex items-center py-[11px]"
				style={{
					boxSizing: "border-box",
					flex: "84 0 auto",
					minWidth: "0px",
					width: "84px",
				}}
			>
				<span className="text-olive dark:text-dark-olive">Easy</span>
			</div>
			<div
				role="cell"
				className="mx-2 flex items-center py-[11px]"
				style={{
					boxSizing: "border-box",
					flex: "84 0 auto",
					minWidth: "0px",
					width: "84px",
				}}
			>
				<a
					className="flex h-full w-full flex-row items-center"
					href="LINK"
					data-state="closed"
				>
					<div className="flex h-full w-full flex-row items-center">
						<span className="h-2 flex-1 rounded-l-lg bg-fill-3 dark:bg-dark-fill-3"></span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="1em"
							height="1em"
							fill="currentColor"
							className="text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
						>
							<path
								fill-rule="evenodd"
								d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span className="h-2 flex-1 rounded-r-lg bg-fill-3 dark:bg-dark-fill-3"></span>
					</div>
				</a>
			</div>
		</div>
	);
};

export default ListItem;
