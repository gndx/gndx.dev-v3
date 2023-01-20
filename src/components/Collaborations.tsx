import { StarIcon } from "@heroicons/react/24/solid/index.js";
import { UserCircleIcon } from "@heroicons/react/24/outline/index.js";
import collabData from "../data/collabData";
import randomPosts from "../utils/randomPosts";

interface CoursesProps {
	max: number;
	random?: boolean;
}

interface CourseDataProps {
	title: String;
	url: string;
	loc: string;
	badge: string;
}

const Collaborations = ({ max, random }: CoursesProps) => {
	const courses = random ? randomPosts(collabData) : collabData;
	return (
		<div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
			{courses?.slice(0, max).map((course: CourseDataProps) => (
				<div className="text-[0.8125rem] leading-5">
					<div className="flex items-center">
						<img
							src="https://ik.imagekit.io/thatcsharpguy/feregri_no/blog/collab-icon.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674150898863"
							alt={course?.title as string}
							className="h-10 w-10 flex-none rounded-full"
						/>
						<div className="ml-4 flex-auto">
							<div className="w-60 font-bold">
									{course?.title}
							</div>
							<div className="w-60 font-medium">
								<a href={course?.url} target="_blank">
								en {course?.loc}
								</a>
							</div>
							
							{/* <div className="mt-1 flex items-center text-slate-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="mr-2 h-4 w-4"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								{{course?.reviews}}
							</div> */}
							
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Collaborations;
