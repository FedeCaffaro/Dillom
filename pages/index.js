import Head from "next/head";
import Mint from "../components/Mint";
import Navbar from "../components/Navbar";
import Link from 'next/link';    
import NFTs from "../components/NFTs";

export default function Home() {
	return (
		<div>
			<Head>
				<link
				rel="preload"
				href="/fonts/TanPearl/TAN-PEARL.ttf"
				as="font"
				crossOrigin=""
			/>
			<title>RIPGANG X SAMOT CLUB</title>
			</Head>
			<div>
				<Navbar />
				<NFTs />
			</div>
		</div>
	);
}
