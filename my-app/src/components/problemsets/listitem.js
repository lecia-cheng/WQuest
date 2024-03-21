import React, { useEffect } from "react";
// Importing Link from react-router-dom to
// navigate to different end points.
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ListItem = (props) => {
	return (
		<div
			role="row"
			className="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
			style={{
				display: "flex",
				flex: "1 0 auto",
				minWidth: "0px",
				backgroundColor: props.id % 2 ? "" : "rgb(0 0 0 / 10%)",
			}}
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
				<span>
					{props.status ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="1em"
							height="1em"
							fill="currentColor"
							class="h-4.5 w-4.5 text-lc-green-60 dark:text-dark-lc-green-60 inline-block shrink-0 fill-none stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21.6 12a9.6 9.6 0 01-9.6 9.6 9.6 9.6 0 110-19.2c1.507 0 2.932.347 4.2.965M19.8 6l-8.4 8.4L9 12"
							></path>
						</svg>
					) : (
						""
					)}
				</span>
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
									href={props.title}
									className="h-5 hover:text-blue-s dark:hover:text-dark-blue-s"
								>
									{props.title}
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
					href={props.title + "/solution"}
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
				}}
			>
				<span>{props.acceptance}%</span>
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
				{props.difficulty == 0 ? (
					<span className="text-green-500">Easy</span>
				) : props.difficulty == 1 ? (
					<span className="text-yellow-500">Medium</span>
				) : (
					<span className="text-red-600">Hard</span>
				)}
			</div>
		</div>
	);
};

export default ListItem;
