import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import Image from "next/image";
import Mint from './Mint';

function NFTs ()  {

return(
<div className="flex flex-col items-center justify-center text-center">
<CardGroup>
  <Card>
    <Card.Body>
    <div className="pt-40 pb-2 text-xl font-bold text-gray-900 lg:text-4xl">
      <Card.Title> NFT 1</Card.Title>
    </div>
        <div className="logo-wrapper">
			<Image src="/../public/NFTs/1.jpeg" width={200} height={200} alt="nft1" />
	    </div>    
      <Card.Text>
        This is the first NFT of the collection.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Engineered by Samot Club</small>
      <Mint />
    </Card.Footer>
  </Card>
  {/* <Card>
    <Card.Body>
    <div className="pt-10 pb-2 text-xl font-bold text-gray-900 lg:text-4xl">
      <Card.Title> NFT 2</Card.Title>
    </div>
        <div className="logo-wrapper">
			<Image src="/../public/NFTs/2.jpeg" width={200} height={200} alt="nft2" />
	    </div>    
      <Card.Text>
        This is the second NFT of the collection.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Engineered by Samot Club</small>
      <Mint />
    </Card.Footer>
  </Card> */}
</CardGroup>

</div>


);
}

export default NFTs;
