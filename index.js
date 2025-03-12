import dotenv from 'dotenv';
dotenv.config();

async function generateAIResponse() {
  try {
    // Dynamically import the GoogleGenerativeAI module
    const { GoogleGenerativeAI } = await import('@google/generative-ai');

    // Get the API key from environment variables
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("API key not found. Please set the GEMINI_API_KEY environment variable.");
    }

    // Initialize the GoogleGenerativeAI with the API key
    const genAI = new GoogleGenerativeAI(apiKey);

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Define the prompt
    const prompt = "Create for me a poem about the beauty of nature";

    // Generate content based on the prompt
    const result = await model.generateContent(prompt);

    // Log the generated response
    console.log(result.response.text());

  } catch (error) {
    console.error("Error generating content:", error);
  }
}

// Call the async function to run the process
generateAIResponse();
