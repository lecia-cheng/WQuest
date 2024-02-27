import React, { useEffect } from "react";
// Importing Link from react-router-dom to
// navigate to different end points.
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProblemSetMenu = () => {
	return (
		<div className="mb-3 flex flex-col py-8">
			<div className="flex w-full flex-wrap gap-2">
				<div className="relative flex-1">
					<div className="w-full">
						<button className="items-center rounded px-3 py-1.5 text-left cursor-pointer focus:outline-none whitespace-nowrap leading-5 bg-gray-700 text-label-2 text-gray-50 flex w-full justify-between">
							Lists
						</button>
					</div>
				</div>
				<div className="relative flex-1">
					<div className="w-full">
						<button className="items-center rounded px-3 py-1.5 text-left cursor-pointer focus:outline-none whitespace-nowrap leading-5 bg-gray-700 text-label-2 text-gray-50 flex w-full justify-between">
							Difficulty
						</button>
					</div>
				</div>
				<div className="relative flex-1">
					<div className="w-full">
						<button className="items-center rounded px-3 py-1.5 text-left cursor-pointer focus:outline-none whitespace-nowrap leading-5 bg-gray-700 text-label-2 text-gray-50 flex w-full justify-between">
							Status
						</button>
					</div>
				</div>
				<div className="relative flex-1">
					<div className="w-full">
						<button className="items-center rounded px-3 py-1.5 text-left cursor-pointer focus:outline-none whitespace-nowrap leading-5 bg-gray-700 text-label-2 text-gray-50 flex w-full justify-between">
							Tags
						</button>
					</div>
				</div>
				<div className="flex min-w-[300px] flex-[4_4_0%] gap-2">
					<div className="flex-1 sentry-unmask rounded-md">
						<div className="relative rounded-md input_input-container__SZzNg">
							<div className="absolute inset-y-0 flex items-center pl-3 bg-gray-700 text-gray-50 pointer-events-none left-0">
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="1em"
										height="1em"
										fill="currentColor"
										className="w-4 h-4"
									>
										<path
											fill-rule="evenodd"
											d="M5.527 5.527a7.5 7.5 0 0111.268 9.852l3.581 3.583a1 1 0 01-1.414 1.415l-3.582-3.583A7.501 7.501 0 015.527 5.527zm1.414 1.414a5.5 5.5 0 107.779 7.779A5.5 5.5 0 006.94 6.94z"
											clip-rule="evenodd"
										></path>
									</svg>
								</span>
							</div>
							<input
								className="block w-full rounded-md leading-5 outline-none bg-gray-700 text-gray-50 border-none py-1.5 text-label-2 dark:text-dark-label-2 bg-fill-3 dark:bg-dark-fill-3 focus:bg-fill-2 dark:focus:bg-dark-fill-2 pl-9 pr-3 sentry-unmask"
								autocomplete="off"
								type="text"
								placeholder="Search questions"
								value=""
							/>
						</div>
					</div>
					<div class="ml-auto inline-flex shrink-0 items-center pl-2.5 cursor-pointer">
						<span class="flex h-8 w-8 items-center justify-center rounded-full shadow-md from-fixed-green to-green-s dark:to-dark-green-s bg-gradient-to-b shadow-fixed-green bg-green-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="1em"
								height="1em"
								fill="currentColor"
								class="h-[18px] w-[18px] fill-none stroke-current text-white"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M2.398 18.296H5.38a3.6 3.6 0 002.93-1.508l1.023-1.433m11.522-9.71h-2.98a3.6 3.6 0 00-2.93 1.507l-1.146 1.603m5.298-5.747l2.502 2.636-2.502 2.637m0 7.438l2.502 2.636-2.502 2.637M2.398 6.052H5.38a3.6 3.6 0 012.93 1.507l6.635 9.289a3.6 3.6 0 002.93 1.507h2.98"
								></path>
							</svg>
						</span>
						<span class="text-green-s dark:text-dark-green-s hidden pl-2.5 md:inline text-green-500">
							Pick One
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProblemSetMenu;
