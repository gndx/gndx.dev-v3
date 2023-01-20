import { PlayIcon } from "@heroicons/react/24/solid/index.js";
import youtubeData from "../data/youtubeData";

const YouTube = () => {
	return (
		youtubeData.slice(0,2).map((v => 


		<article>
		<a href={v.url}
			target={"_blank"}
			 className="relative top-0 block overflow-hidden rounded-2xl">
			<img
				alt={v.title}
				src={v.thumbnail}
				className="h-44 w-full object-cover"
			/>
			<div className="bg-gray-900 p-4">
				<p className="mb-1 text-sm text-gray-400">Video</p>
				<h5 className="text-sm text-white">{v.title}</h5>
				<p className="mt-1 text-xs text-gray-400">
				{v.description}	
				</p>
			</div>
		</a>
	</article>
			
			
			)
		)
	);
};

export default YouTube;
