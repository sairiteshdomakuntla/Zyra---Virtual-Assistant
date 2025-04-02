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
      <span className='title-text'>I'm Zyra, Your Advanced Virtual Assistant</span>
      <p className='subtitle'>Speak to me and I'll help you with anything you need</p>
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



// import { useContext, useEffect } from 'react'
// import './App.css'
// import va from './assets/ai.png';
// import speakImg from './assets/speak.gif';
// import aiGIF from './assets/aiVoice.gif';
// import { CiMicrophoneOn } from 'react-icons/ci'
// import { IoRefresh } from 'react-icons/io5'
// import { dataContext } from './context/UserContext'

// function App() {
//   const { recognition, speaking, setSpeaking, prompt, setPrompt, response, setResponse } = useContext(dataContext);

//   // Add subtle animation effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const zyra = document.getElementById('zyra');
//       const imageGlow = document.querySelector('.image-glow');
//       if (zyra && imageGlow) {
//         const moveX = (e.clientX - window.innerWidth / 2) / 50;
//         const moveY = (e.clientY - window.innerHeight / 2) / 50;
//         zyra.style.transform = `translate(${moveX}px, ${moveY}px)`;
//         imageGlow.style.transform = `translate(${moveX * 0.7}px, ${moveY * 0.7}px) scale(1.4)`;
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const startListening = () => {
//     setPrompt("Listening...");
//     setSpeaking(true);
//     setResponse(false);
//     recognition.start();
//   };

//   const resetAssistant = () => {
//     setSpeaking(false);
//     setPrompt("");
//     setResponse(false);
//   };

//   return (
//     <div className='main'>
//       <div className="image-container">
//         <div className="cyber-port"></div>
//         <div className="data-lines"></div>
//         <div className="connection-dots"></div>
//         <div className="image-glow"></div>
//         <div className="image-frame"></div>
//         <img src={va} alt="AI Assistant" id='zyra'/>
//       </div>
      
//       <h1 className='title-text'>I'm Zyra, Your Advanced Virtual Assistant</h1>
//       <p className='subtitle'>Speak to me and I'll help you with anything you need</p>
      
//       {!speaking ? (
//         <button onClick={startListening} className="pulse-button">
//           Click here <CiMicrophoneOn size={24} />
//         </button>
//       ) : (
//         <div className='response'>
//           {!response ? (
//             <>
//               <img src={speakImg} alt="Speaking animation" id='speakImg'/>
//               <p>{prompt}</p>
//             </>
//           ) : (
//             <>
//               <img src={aiGIF} alt="AI responding animation" id='aiGIF'/>
//               <p>{prompt}</p>
//               <button onClick={resetAssistant} className="reset-button">
//                 New Query <IoRefresh size={20} />
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default App;