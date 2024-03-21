import React, { useEffect } from "react";
// Importing Link from react-router-dom to
// navigate to different end points.
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ListItem from "./listitem.js";

const items = [
	{ title: "test1", status: 1, acceptance: 19.2, difficulty: 2 },
	{ title: "test1", status: 0, acceptance: 92.4, difficulty: 0 },
	{ title: "test1", status: 0, acceptance: 12.4, difficulty: 2 },
	{ title: "test1", status: 0, acceptance: 55.1, difficulty: 1 },
	{ title: "test1", status: 0, acceptance: 55.7, difficulty: 1 },
	{ title: "test1", status: 0, acceptance: 12.4, difficulty: 2 },
	{ title: "test1", status: 0, acceptance: 97.3, difficulty: 0 },
	{ title: "test1", status: 0, acceptance: 92.4, difficulty: 0 },
	{ title: "test1", status: 0, acceptance: 12.4, difficulty: 2 },
	{ title: "test1", status: 0, acceptance: 12.4, difficulty: 2 },
];

const ProblemSetList = () => {
	return (
		<div>
			<div className="border-divider-border-2 dark:border-dark-divider-border-2 border-b border-neutral-900">
				<div
					role="row"
					style={{
						display: "flex",
						flex: "1 0 auto",
						minWidth: "0px",
					}}
				>
					<div
						colspan="1"
						role="columnheader"
						className="mx-2 py-[11px] font-normal text-label-3 dark:text-dark-label-3"
						style={{
							boxSizing: "border-box",
							flex: "52 0 auto",
							minWidth: "0px",
							width: "52px",
						}}
					>
						<div className="flex items-center justify-between">
							<div className="overflow-hidden text-ellipsis">
								Status
							</div>
						</div>
					</div>
					<div
						colspan="1"
						role="columnheader"
						className="mx-2 py-[11px] font-normal text-label-3 dark:text-dark-label-3 hover:text-gray-7 dark:hover:text-dark-gray-7 group"
						style={{
							boxSizing: "border-box",
							flex: "260 0 auto",
							minWidth: "0px",
							width: "260px",
							cursor: "pointer",
						}}
					>
						<div className="flex items-center justify-between">
							<div className="overflow-hidden text-ellipsis">
								Title
							</div>
							<span className="text-gray-5 dark:text-dark-gray-5 ml-2 h-3.5 w-3.5 group-hover:text-gray-7 dark:group-hover:text-dark-gray-7">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="1em"
									height="1em"
									fill="currentColor"
								>
									<path d="M18.695 9.378L12.83 3.769a1.137 1.137 0 00-.06-.054c-.489-.404-1.249-.377-1.7.06L5.303 9.381a.51.51 0 00-.16.366c0 .297.27.539.602.539h12.512a.64.64 0 00.411-.146.501.501 0 00.028-.762zM12.77 20.285c.021-.017.042-.035.062-.054l5.863-5.609a.5.5 0 00-.028-.762.64.64 0 00-.41-.146H5.743c-.332 0-.601.242-.601.54a.51.51 0 00.16.365l5.769 5.606c.45.437 1.21.464 1.698.06z"></path>
								</svg>
							</span>
						</div>
					</div>
					<div
						colspan="1"
						role="columnheader"
						className="mx-2 py-[11px] font-normal text-label-3 dark:text-dark-label-3"
						style={{
							boxSizing: "border-box",
							flex: "54 0 auto",
							minWidth: "0px",
							width: "54px",
						}}
					>
						<div className="flex items-center justify-between">
							<div className="overflow-hidden text-ellipsis">
								Solution
							</div>
						</div>
					</div>
					<div
						colspan="1"
						role="columnheader"
						className="mx-2 py-[11px] font-normal text-label-3 dark:text-dark-label-3 hover:text-gray-7 dark:hover:text-dark-gray-7 group"
						style={{
							boxSizing: "border-box",
							flex: "100 0 auto",
							minWidth: "0px",
							width: "100px",
							cursor: "pointer",
						}}
					>
						<div className="flex items-center justify-between">
							<div className="overflow-hidden text-ellipsis">
								Acceptance
							</div>
							<span className="text-gray-5 dark:text-dark-gray-5 ml-2 h-3.5 w-3.5 group-hover:text-gray-7 dark:group-hover:text-dark-gray-7">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="1em"
									height="1em"
									fill="currentColor"
								>
									<path d="M18.695 9.378L12.83 3.769a1.137 1.137 0 00-.06-.054c-.489-.404-1.249-.377-1.7.06L5.303 9.381a.51.51 0 00-.16.366c0 .297.27.539.602.539h12.512a.64.64 0 00.411-.146.501.501 0 00.028-.762zM12.77 20.285c.021-.017.042-.035.062-.054l5.863-5.609a.5.5 0 00-.028-.762.64.64 0 00-.41-.146H5.743c-.332 0-.601.242-.601.54a.51.51 0 00.16.365l5.769 5.606c.45.437 1.21.464 1.698.06z"></path>
								</svg>
							</span>
						</div>
					</div>
					<div
						colspan="1"
						role="columnheader"
						className="mx-2 py-[11px] font-normal text-label-3 dark:text-dark-label-3 hover:text-gray-7 dark:hover:text-dark-gray-7 group"
						style={{
							boxSizing: "border-box",
							flex: "84 0 auto",
							minWidth: "0px",
							width: "84px",
							cursor: "pointer",
						}}
					>
						<div className="flex items-center justify-between">
							<div className="overflow-hidden text-ellipsis">
								Difficulty
							</div>
							<span className="text-gray-5 dark:text-dark-gray-5 ml-2 h-3.5 w-3.5 group-hover:text-gray-7 dark:group-hover:text-dark-gray-7">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="1em"
									height="1em"
									fill="currentColor"
								>
									<path d="M18.695 9.378L12.83 3.769a1.137 1.137 0 00-.06-.054c-.489-.404-1.249-.377-1.7.06L5.303 9.381a.51.51 0 00-.16.366c0 .297.27.539.602.539h12.512a.64.64 0 00.411-.146.501.501 0 00.028-.762zM12.77 20.285c.021-.017.042-.035.062-.054l5.863-5.609a.5.5 0 00-.028-.762.64.64 0 00-.41-.146H5.743c-.332 0-.601.242-.601.54a.51.51 0 00.16.365l5.769 5.606c.45.437 1.21.464 1.698.06z"></path>
								</svg>
							</span>
						</div>
					</div>
				</div>
			</div>

			<div role="rowgroup">
				{items.map((item, i) => (
					<ListItem
						title={item.title}
						status={item.status}
						acceptance={item.acceptance}
						difficulty={item.difficulty}
                        id = {i}
					/>
				))}
			</div>
		</div>
	);
};

export default ProblemSetList;
