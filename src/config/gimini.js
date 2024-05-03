



// node --version # Should be >= 18
// npm install @google/generative-ai
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"

// Define the name of the generative model and the API key
const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "AIzaSyAfui7XKJKMyQw7yCqpwF6zbC-QmjXDXLo";

// Function to run a chat session with the generative AI
async function runChat(ai) {
  // Initialize Google Generative AI with API key
  const genAI = new GoogleGenerativeAI(API_KEY);
  // Retrieve the specified generative model
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  // Configuration for generating responses
  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  // Safety settings to filter out harmful content
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  // Start a chat session with the specified settings and history
  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  // Send a message to the chat and await the response
  const result = await chat.sendMessage(ai);
  const response = result.response;
  console.log(response.text());

  // Return the text of the generated response
  return response.text()
}

// Export the runChat function
export default runChat;
