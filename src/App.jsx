import { useContext } from 'react'
import './App.css'
import va from './assets/ai.png';
import speakImg from './assets/speak.gif';
import aiGIF from './assets/aiVoice.gif';
import { CiMicrophoneOn } from 'react-icons/ci'
import { dataContext } from './context/UserContext'

function App() {

  let {recognition,speaking,setSpeaking,prompt,setPrompt,response,setResponse}=useContext(dataContext);

  return (
    <div className='main'>
      <img src={va} alt="" id='zyra'/>
      <span>I'm Zyra, Your Advanced Virtual Assistant</span>
      {!speaking ?
        <button onClick={()=>{
          setPrompt("Listening...");
          setSpeaking(true);
          setResponse(false);
          recognition.start();
        }}>Click here <CiMicrophoneOn /></button> 
        : 
        <div className='response'>
          {!response ? <img src={speakImg} alt="" id='speakImg'/> : 
          <img src={aiGIF} alt="" id='aiGIF'/>
          }
          
          <p>{prompt}</p>
        </div>
    }
      
    </div>
  )
}

export default App;
