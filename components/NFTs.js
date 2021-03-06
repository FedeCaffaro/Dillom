import Card from 'react-bootstrap/Card';
import Image from "next/image";
import Mint from './Mint';
import Countdown from "./Countdown.tsx";
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NFTs ()  {

  return(
    <div className="main-container" >
          <img src="/Logo.webp" width={600} height={600} alt="Bohemian GroupLogo" className="rotate"/>
          <div className="countdown-container">
            <Countdown />
          </div>
          <br/>
          <div className="h-12 w-12 mb-1">
            <a href="https://samot.chat">
              <FontAwesomeIcon icon={faDiscord}/>
            </a>
          </div>
    </div>
  );
}
  
export default NFTs;
