import React from "react";
import Image from "next/image";


function Mint() {
	return (
		<div>

				<div className="flex flex-col items-center justify-center pt-40 space-y-2 text-xl font-bold text-center lg:text-4xl">
					<div className="pb-10 text-gray-900 ">
						Si quiere compra con <span className="text-blue-500">DIOS...</span>
					</div>
					
					<div >
						<Image src="/NFTs/1.jpeg" height={300} width={250} alt="NFT1"/>
						<div className="flex items-center justify-center w-64 h-16 text-3xl font-semibold text-white bg-gray-900 rounded-lg cursor-pointer hover:shadow-lg">
						<h1 className="text-center">Mintea NFT 💎 </h1>
						</div>
						
					</div>
					<div>
						<Image src="/NFTs/2.jpeg" height={300} width={250} alt="NFT2"/>
						<div className="flex items-center justify-center w-64 h-16 text-3xl font-semibold text-white bg-gray-900 rounded-lg cursor-pointer hover:shadow-lg">
						<h1 className="text-center">Mintea NFT 💎 </h1>
						</div>
					</div>

				</div>
		</div>
	);
}

export default Mint;
