import React, { useEffect } from "react";
// Importing Link from react-router-dom to
// navigate to different end points.
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ListItem from "./listitem.js";

const items = [
	{
		id: "two-sum",
		title: "Two Sum",
		status: 1,
		category: "Array",
		difficulty: 0,
	},
	{
		id: "reverse-linked-list",
		title: "Reverse Linked List",
		status: 0,
		category: "Linked List",
		difficulty: 2,
	},
	{
		id: "jump-game",
		title: "Jump Game",
		status: 0,
		category: "Dynamic Programming",
		difficulty: 1,
	},
	{
		id: "valid-parentheses",
		title: "Valid Parenthesis",
		status: 0,
		category: "Stack",
		difficulty: 0,
	},
	{
		id: "search-a-2d-matrix",
		title: "Search a 2D matrix",
		status: 0,
		category: "Binary Search",
		difficulty: 1,
	},
	{
		id: "container-with-most-water",
		title: "Container With Most Water",
		status: 0,
		category: "Two Pointers",
		difficulty: 1,
	},
	{
		id: "merge-intervals",
		title: "Merge Intervals",
		status: 0,
		category: "Intervals",
		difficulty: 1,
	},
	{
		id: "maximum-depth-of-binary-tree",
		title: "Maximum Depth of Binary Tree",
		status: 0,
		category: "Tree",
		difficulty: 0,
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
		status: 0,
		category: "Array",
		difficulty: 0,
	},
	{
		id: "subsets",
		title: "Subsets",
		status: 0,
		category: "Backtracking",
		difficulty: 1,
	},
];

const ProblemSetList = () => {
	return (
		<div>
			<div className="relative overflow-x-auto mx-auto pb-10">
                <table className='text-sm text-left text-gray-800  w-full max-w-[1200px] mx-0'>
                    <thead className='text-xs text-gray-700 uppercase  border-b '>
                        <tr>
                            <th scope='col' className='px-1 py-3 w-0 font-medium'>
                                Status
                            </th>
                            <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                Title
                            </th>
                            <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                Difficulty
                            </th>

                            <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                Category
                            </th>
                            <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                Solution
                            </th>
                        </tr>
                    </thead>
					<ListItem
						problems = {items}
                    />
                </table>
			</div>
		</div>
	);
};

export default ProblemSetList;
