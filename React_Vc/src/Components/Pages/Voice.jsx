import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { BackgroundGradientAnimation } from "../background-gradient-animation";
import { LampContainer } from "../Ace_Ui/LampDemo";

// Replace with your actual API key
const genAI = new GoogleGenerativeAI("AIzaSyBlyrCTuq5O4W7EDTmE-oHdfMLgliTnOd4");

const SpeakAi = (text) => {
  if (!text) return;
  window.speechSynthesis.cancel(); // Stop any previous speech
  const speakInput = new SpeechSynthesisUtterance(text);
  speakInput.lang = "en-US";
  speakInput.onend = () => console.log("Speech synthesis finished.");
  window.speechSynthesis.speak(speakInput);
};

const StopInput = () => {
  window.speechSynthesis.cancel();
  console.log("Speech synthesis stopped.");
};

const Voice = () => {
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState("");

  const VoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      console.log("Your browser does not support Speech Recognition");
      return;
    }

    let recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => console.log("Voice recognition started...");
    recognition.onresult = (event) => {
      let spokenText = event.results[0][0].transcript.toLowerCase();
      console.log(`You said: ${spokenText}`);
      setTranscript(spokenText);
      getResponseForGivenPrompt(spokenText);
    };

    recognition.onerror = (event) => console.error("Speech recognition error:", event.error);
    recognition.onend = () => console.log("Voice recognition ended");

    recognition.start();
  };

  const getResponseForGivenPrompt = async (prompt) => {
    try {
      setLoading(true);
      console.log("Fetching AI response for:", prompt);

      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(prompt);

      console.log("API Raw Response:", result);

      const responseText = result.response.text(); // Correct way to extract text response

      if (!responseText) {
        throw new Error("Empty response from API");
      }

      setRes(responseText);
      console.log("AI Response Text:", responseText);
      SpeakAi(responseText);
    } catch (error) {
      console.error("Something went wrong:", error);
      SpeakAi("Sorry, I couldn't process your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
  
   <div className=" mt-10">
   
    <LampContainer/>
   
    <div className="flex flex-col items-center align-middle justify-center min-h-screen -translate-64 -mt-[400px] ml-[500px]  p-6">
      <div className=" p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center">
        <h1 className="  text-2xl md:text-4xl bg-clip-text text-transparent text-center bg-gradient-to-b from-cyan-900 to-cyan-700 dark:from-cyan-800 dark:to-cyan-100 lg:text-[55px] font-bold inter-var "> Nexa Ai Assistant</h1>
        <p  className="text-white mt-2">Click the button and speak a command.</p>
        
        <div className="flex gap-6 justify-center mt-7">
          <button
            onClick={VoiceInput}
            className="px-5 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all"
          >
            Start Listening
          </button>
          <button
            onClick={StopInput}
            className="px-5 py-3 bg-red-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-red-600 transition-all"
          >
            Stop Listening
          </button>
        </div>
        
        <p className="mt-6 text-gray-600 italic text-lg">{transcript}</p>
        {loading && <p className="text-blue-500 mt-2 text-lg font-semibold">Processing...</p>}
      </div>
      
      <div className="mt-6 p-4 bg-white rounded-xl shadow-md max-w-lg w-full text-center">
        <p className="text-gray-800 font-medium">{res}</p>
      </div>
    </div>
    </div>
   
  );
};

export default Voice;
