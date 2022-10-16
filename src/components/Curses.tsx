import { StarIcon } from "@heroicons/react/24/solid/index.js";
import { UserCircleIcon } from "@heroicons/react/24/outline/index.js";
import coursesData from "../data/coursesData";
import randomPosts from "../utils/randomPosts";

interface CoursesProps {
	max: number;
	random?: boolean;
}

interface CourseDataProps {
	title: String;
	url: string;
	badge: string;
	stars: number;
	reviews: number;
}

const Courses = ({ max, random }: CoursesProps) => {
	const courses = random ? randomPosts(coursesData) : coursesData;
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
			{courses?.slice(0, max).map((course: CourseDataProps) => (
				<a
					className="relative block overflow-hidden rounded-lg border bg-gray-200 p-8"
					href={course.url}
					target="_blank"
				>
					<span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

					<div className="justify-between sm:flex">
						<div>
							<h5 className="h-24 text-xl font-bold text-gray-900">
								{course?.title}
							</h5>
						</div>
						<div className="ml-3 hidden flex-shrink-0 sm:block">
							<img
								className="h-16 w-16 rounded-lg object-cover shadow-sm"
								src={course?.badge}
								alt={course?.title as string}
							/>
						</div>
					</div>
				</a>
			))}
		</div>
	);
};

export default Courses;
