import { PlayIcon } from "@heroicons/react/24/solid/index.js";

const YouTube = () => {
	return (
		<article>
			<a
				href="https://www.youtube.com/channel/UCw05fUBPwmpu-ehXFMqfdMw?sub_confirmation=1"
				target={"_blank"}
				className="relative block overflow-hidden rounded-xl bg-[url(https://arepa.s3.amazonaws.com/oscar-barajas-gndx.png)] bg-cover bg-center bg-no-repeat"
			>
				<span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-xl bg-red-600 px-4 py-2 text-xs font-semibold text-white">
					<PlayIcon className="ml-1.5 h-6 w-6 text-white" />
				</span>

				<div className="relative bg-black bg-opacity-40 p-8 pt-32 text-white">
					<h5 className="mt-2 text-2xl font-bold">Oscar Barajas @gndx</h5>
					<p className="mt-2 text-sm text-gray-400">Último Video:</p>
					<p className="text-sm">
						Desde la Historia a WEB3 | ¿Que es Web 3.0? ¿Cómo funciona?
					</p>
				</div>
			</a>
		</article>
	);
};

export default YouTube;
