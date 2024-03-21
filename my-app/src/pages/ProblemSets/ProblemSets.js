import React, { useEffect, useState } from "react";
import logo from "../../Assets/logo.png";
import ProblemSetMenu from "../../components/problemsets/problemsetmenu.js";
import ProblemSetList from "../../components/problemsets/problemsetlist.js";
import Calendar from "react-calendar";

const ProblemSets = () => {
	const [value, onChange] = useState(new Date());
	return (
		<div>
			<a href="/">
				<img src={logo} />
			</a>
			<div className="container mx-auto w-full grow px-4 pb-4 pt-0 md:max-w-[888px] md:px-6 md:pb-6 md:pt-0 lg:max-w-screen-xl dark:bg-dark-layer-bg">
				<div class="hidden">
					<div class="hidden">
						<div class="swiper-autoheight"></div>
						<div class="swiper-autoheight"></div>
						<div class="gap-8"></div>
						<div class="gap-8"></div>
						<div class="gap-6"></div>
						<div class="gap-6"></div>
						<div class="pt-3"></div>
						<div class="pt-3"></div>
						<div class="space-y-1.5"></div>
						<div class="space-y-1.5"></div>
						<div role="rowgroup"></div>
						<div role="rowgroup"></div>
						<div role="table"></div>
						<div role="table"></div>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
					<div className="z-base col-span-4 md:col-span-2 lg:col-span-3">
						<ProblemSetMenu />
						<ProblemSetList />
					</div>
					<div className="col-span-4 md:col-span-1 ">
						<div class="col-span-4 md:col-span-1 bg-gray-700 text-gray-50 py-5 rounded-md">
							<Calendar
								onChange={onChange}
								value={value}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProblemSets;
