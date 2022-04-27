import React, { useState , useEffect} from "react";
import { Transition } from "@headlessui/react";
import { useWeb3React } from '@web3-react/core';
import { injected } from './Wallet/connectors';

import Image from "next/image";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const { active, account, library, connector, activate, deactivate } = useWeb3React();
  
	useEffect(() => {
	  const connectWalletOnPageLoad = async () => {
		if (localStorage?.getItem('isWalletConnected') === 'true') {
		  try {
			await activate(injected);
			localStorage.setItem('isWalletConnected', true);
		  } catch (ex) {
			console.log(ex);
		  }
		}
	  }
	  connectWalletOnPageLoad();
	}, [])
  
	async function connect() {
	  try {
		await activate(injected)
		localStorage.setItem('isWalletConnected', true);
	  } catch (ex) {
		console.log(ex)
	  }
	}
  
	async function disconnect() {
	  try {
		deactivate();
		localStorage.setItem('isWalletConnected', false);
	  } catch (ex) {
		console.log(ex);
	  }
	}
  
	return (
		<div>
			<nav className="fixed z-10 w-full bg-black shadow-lg ">
				<div className="flex items-center justify-between w-full h-25">
					<div className="flex items-center justify-center flex-shrink-0 w-1/4">
						<img 
							src="/Logo_Bohemian_Blanco.png"
							alt="Logo BG"
							className="object-scale-down h-24 w-48"
						/>
					</div>
					<div className="flex justify-center md:hidden ">
					<button
						onClick={() => setIsOpen(!isOpen)}
						type="button"
						className="inline-flex items-center justify-center p-2 text-white bg-black rounded-md hover:bg-black"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						{!isOpen ? (
							<svg
								className="block w-8 h-8"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						) : (
							<svg
								className="block w-8 h-8"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
					</button>
					</div>
					<div className="hidden md:block">
						<div className="flex items-baseline">
						{active ?
						<button  className="px-3 py-2 m-2 text-sm text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"  onClick={disconnect}>Disconnect ...{account.slice(-5)}</button>
						: 
						<button  className="px-3 py-2 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"  onClick={connect}>Connect Wallet</button>
						}											
						</div>
					</div>
					<div className="flex items-center justify-center flex-shrink-0 w-1/4">
						<img
							src="/Logo_Samot_Blanco.png"
							alt="Logo Samot"
							className="object-scale-down h-24 w-48"
						/>
					</div>
				</div>
				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="px-2 pt-2 pb-3 space-y-1 bg-white sm:px-3"
							>
							<ul>
								<li>
								{active ?
								<button  className="px-3 py-2 m-2 text-sm text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"  onClick={disconnect}>Disconnect ...{account.slice(-5)}</button>
								: 
								<button  className="px-3 py-2 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"  onClick={connect}>Connect Wallet</button>
								}					
								</li>
								<li>
								<a
									href="https://twitter.com/samotclub"
									target="_blank" rel="noopener noreferrer"
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer hover:bg-black hover:text-white"
								>
									Twitter
								</a>
								</li>
							</ul>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;
