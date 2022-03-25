import Card from 'react-bootstrap/Card';
import Image from "next/image";
import Mint from './Mint';

function NFTs ()  {

return(
<div className="flex flex-col items-center justify-center w-screen h-screen text-center bg-gray-250" >
  <Card>
    <Card.Body>
    <div className="pt-20 pb-2 text-xl font-bold text-gray-900 lg:text-4xl">
      <Card.Title> JUSTO BOLSAS CLUB NFTs </Card.Title>
    </div>
        <div className="logo-wrapper">
			<Image src="/../public/Justo.webp" width={512} height={512} alt="nft1" />
	    </div>    
      <Card.Text className="text-xl font-bold text-gray-900 lg:text-xl">
        This is the first NFT of the collection.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Engineered by Justo Bolsa</small>
      <Mint />
    </Card.Footer>
  </Card>

</div>


);
}

export default NFTs;
