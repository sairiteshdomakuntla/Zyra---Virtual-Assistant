import React, { createContext, useState } from 'react';
import run from '../gemini';
export const dataContext=createContext(null);

function UserContext({children}) {

    let [speaking,setSpeaking]=useState(false);
    let [prompt,setPrompt]=useState("Listening...");
    let [response,setResponse]=useState(false);

    function speak(text){
        let text_speak=new SpeechSynthesisUtterance(text);
        text_speak.volume=1;
        text_speak.rate=1;
        text_speak.pitch=1;
        text_speak.lang="en-GB";
        window.speechSynthesis.speak(text_speak);
    }

    async function aiResponse(prompt){
        let text=await run(prompt);
        // console.log(text);
        let newText=text.split("**")&&text.split("*")&&text.replace("google","Sai Ritesh")&&text.replace("Google","Sai Ritesh");
        setPrompt(newText);
        speak(newText);
        setResponse(true);
        setTimeout(()=>{
            setSpeaking(false);
        },5000);
    }

    let SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition=new SpeechRecognition();
    recognition.onresult=(e)=>{
        // console.log(e);
        let currentIndex=e.resultIndex;
        let transcript=e.results[currentIndex][0].transcript;
        // console.log(transcript);
        setPrompt(transcript);
        // aiResponse(transcript);
        takeCommand(transcript.toLowerCase());
    }

    function takeCommand(command){
        if(command.includes("open") && command.includes("youtube")){
            window.open("https://youtube.com","_blank");
            speak("Opening Youtube");
            setResponse(true);
            setPrompt("Opening Youtube");
            setTimeout(()=>{
                setSpeaking(false);
            },5000);
        }
        else if(command.includes("open") && command.includes("whatsapp")){
            window.open("https://web.whatsapp.com","_blank");
            speak("Opening Whatsapp");
            setResponse(true);
            setPrompt("Opening Whatsapp");
            setTimeout(()=>{
                setSpeaking(false);
            },5000);
        }
        else if(command.includes("open") && command.includes("instagram")){
            window.open("https://www.instagram.com","_blank");
            speak("Opening Instagram");
            setResponse(true);
            setPrompt("Opening Instagram");
            setTimeout(()=>{
                setSpeaking(false);
            },5000);
        }
        else if(command.includes("what") && command.includes("time")){
            let time=new Date().toLocaleTimeString(undefined,{hour:"numeric",minute:"numeric"});
            speak(`The time is ${time}`);
            setResponse(true);
            setPrompt(`The time is ${time}`);
            setTimeout(()=>{
                setSpeaking(false);
            },5000);
        }
        else if(command.includes("what") && command.includes("date")){
            let date=new Date().toLocaleDateString();
            speak(`Today's date is ${date}`);
            setResponse(true);
            setPrompt(`Today's date is ${date}`);
            setTimeout(()=>{
                setSpeaking(false);
            },5000);
        }
        else if(command.includes("open") && command.includes("google")){
            window.open("https://google.com","_blank");
            speak("Opening Google");
            setResponse(true);
            setPrompt("Opening Google");
            setTimeout(()=>{
                setSpeaking(false);
            },5000);
        }
        else if(command.includes("open") && command.includes("linkedin")){
            window.open("https://linkedin.com","_blank");
            speak("Opening Linkedin");
            setResponse(true);
            setPrompt("Opening Linkedin");
            setTimeout(()=>{
                setSpeaking(false);
            },5000);
        }
        else if(command.includes("open") && command.includes("github")){
            window.open("https://github.com","_blank");
            speak("Opening Github");
            setResponse(true);
            setPrompt("Opening Github");
            setTimeout(()=>{
                setSpeaking(false);
            },5000);
        }
        else if(command.includes("open") && command.includes("netflix")){
            window.open("https://netflix.com","_blank");
            speak("Opening Netflix");
            setResponse(true);
            setPrompt("Opening Netflix");
            setTimeout(()=>{
                setSpeaking(false);
            },5000);
        }
        else{
            aiResponse(command);
        }
    }

    let value={
        recognition,
        speaking,
        setSpeaking,
        prompt,
        setPrompt,
        response,
        setResponse
    }
  return (
        <dataContext.Provider value={value}>
        {children}
        </dataContext.Provider>
  )
}

export default UserContext
