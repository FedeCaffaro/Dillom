import Card from 'react-bootstrap/Card';
import Image from "next/image";
import Mint from './Mint';
import Countdown from "./Countdown.tsx";
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NFTs ()  {

  return(
    <div className="flex flex-col items-center justify-center w-screen h-screen" >
          <img src="/Logo.webp" width={600} height={600} alt="Bohemian GroupLogo" />
          <div className="-mt-44" >
            <Countdown />
          </div>
          <br/>
          <FontAwesomeIcon icon={faDiscord} className="w-12 h-12 justify-self-end" />
    </div>
  );
}
  
export default NFTs;
