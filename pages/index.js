import Head from "next/head";
import Mint from "../components/Mint";
import Navbar from "../components/Navbar";
import Link from 'next/link';    

export default function Home() {
	return (
		<div>
			<Navbar />
			<Mint />
		</div>
	);
}
