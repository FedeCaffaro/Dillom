import Head from "next/head";
import Mint from "../components/Mint";
import Navbar from "../components/Navbar";
import Link from 'next/link';    
import NFTs from "../components/NFTs";

export default function Home() {
	return (
		<div>
			<Navbar />
			<NFTs />
		</div>
	);
}
