import { useState, useEffect } from "react";
import {ethers} from "ethers";
import NFTAbi from "../constants/NFTAbi.json";
import { useWeb3React } from "@web3-react/core";
import { maxPerTxn,maxId } from "../constants/contractConfig";
import Image from "next/image";
import RangeSlider from 'react-bootstrap-range-slider';


const contractAddress = NFTAbi.address;
const contractABI = NFTAbi.abi;

const Mint = () => {
    const [mintAmount,setMintAmount] = useState(1);
    const [id, setId] = useState(0);
	const [loading, setLoading] = useState(true)
	const [totalMinted, setTotalMinted] = useState(0)
	const [maxPerTransaction, setMaxPerTransaction] = useState(0)
	const [saleActive, setSaleActive] = useState(false)
	const [price, setPrice] = useState(0)
	const [transactionUrl, setTransactionUrl] = useState("")
	const [pending, setPending] = useState(false)
	const [contractUrl, setContractUrl] = useState("")

    const {
        active,
        activate,
        chainId,
        account,
        library: provider,
      } = useWeb3React();

    async function handleMint(){
        if (active) {
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractABI, signer);
            try {
              await contract.claimItem(BigNumber.from(id),BigNumber.from(mintAmount));
            } catch (error) {
              console.log(error);
            }
          } else {
            console.log("Please install MetaMask");
          }
        }

    const handleMintDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount-1);
    };

    const handleMintIncrement = () => {
        if (mintAmount >= maxPerTxn) return;
        setMintAmount(mintAmount + 1);
    };

	console.log(chainId) // 42

    return(
        <div className="flex flex-col items-center justify-center text-center">
            {active ?
			
			
			(<div>
				{chainId ==1 ? (
				<div>
					<div>
					<button onClick={handleMintDecrement} className="px-2 py-1 text-lg font-bold text-black bg-gray-300 border border-black rounded-md cursor-pointer py- hover:bg-black hover:text-white"> - </button>
					<input type="range" min="1" max="5" value={mintAmount}/>
					<button onClick={handleMintIncrement} className="px-2 py-1 text-lg font-bold text-black bg-gray-300 border border-black rounded-md cursor-pointer py- hover:bg-black hover:text-white"> + </button>
					</div>
					<button onClick={handleMint} className="px-3 py-2 text-lg font-bold text-black bg-gray-300 border border-black rounded-md cursor-pointer hover:bg-black hover:text-white"> MINT NOW!</button>
				</div>
				) :
				(<p className="font-bold"> You must be connected to the ethereum mainnet. Check Metamask network. </p>)
				}
            </div>
			):
			
			(<div>
			<p className="font-bold"> You must me connected to MetaMask to mint. </p>
			</div>
			)
			}
			
			
        </div>
    );
};

export default Mint;
