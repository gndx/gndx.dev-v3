const Conferences = () => {
	return (
		<article>
			<a href="#" className="relative top-0 block overflow-hidden rounded-2xl">
				<img
					alt="Ultima conferencia impartida por Oscar Barajas @gndx"
					src="https://arepa.s3.amazonaws.com/oscar-barajas-tavares-gndx-web3.png"
					className="h-44 w-full object-cover"
				/>
				<div className="bg-gray-900 p-4">
					<p className="mb-1 text-sm text-gray-400">Conferencias</p>
					<h5 className="text-sm text-white">De la Antiguedad a Web3</h5>
					<p className="mt-1 text-xs text-gray-400">
						Desde el antiguo Egipto, romanos, hasta la actualidad, repasamos las
						bases que construyeron la criptografía...
					</p>
				</div>
			</a>
		</article>
	);
};

export default Conferences;
