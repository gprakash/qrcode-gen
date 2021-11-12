import './App.css';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';


const App = () => {

  const [temp, setTemp] = useState(''); 
  const [word, setWord] = useState('http://www.connect-ai.solutions'); 
  const [qrCode, setQrCode] = useState(''); 

  useEffect( () => {
		QRCode.toDataURL(word).then( (data) => {
			setQrCode(data);
		});	
	}, [word] );

   // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setWord(temp);
  }
  

  return <div className="main"> QR Code - Connect AI Solutions 
		<br></br>
		<br></br>

	        <div >
          		<input type="text" onChange={
            		(e) => {setTemp(e.target.value)}}
            		placeholder="Enter text to encode" />
          		<button  
            		onClick={handleClick}>
            		Generate
          		</button>
        	</div>
		<br></br>
		<br></br>

		<img className="image" src={qrCode}  alt="QR Code"/>	
	</div>
}

export default App;
