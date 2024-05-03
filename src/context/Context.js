import { createContext, useState } from "react";
import runChat from "../config/gimini";

// Create a context object
export const Context = createContext();

// Define a context provider component
const ContextProvider = (props) => {
    
  // Define state variables using useState hook
  const [input, setInput] = useState("");
  const [recentAi, setRecentAi] = useState("");
  const [prevAi, setPrevAi] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // Function to add delay for each word in the response
  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  // Function to start a new chat session
  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  // Function to handle sending messages to the generative AI
  const onSent = async (ai) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;

    // If AI is specified, send the message to the specified AI
    if (ai !== undefined) {
      response = await runChat(ai);
      setRecentAi(ai);
    } else {
      // If AI is not specified, send the message using the input value
      setPrevAi((prev) => [...prev, input]);
      setRecentAi(input);
      response = await runChat(input);
    }

    // Split the response and format it with HTML tags
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");

    // Add delay for each word in the response
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

    setLoading(false);
    setInput("");
  };

  // Define the context value object
  const contextValue = {
    prevAi,
    setPrevAi,
    onSent,
    setRecentAi,
    recentAi,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    // Provide the context value to the components within the provider
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
