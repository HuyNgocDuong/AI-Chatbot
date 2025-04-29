import genAI from './config/chat-bot.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {
  console.log(colors.bold.green('Welcome to the Gemini Chatbot Program!'));
  console.log(colors.bold.green('You can start chatting with the bot.'));

  // Initialize Gemini chat session
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const chat = model.startChat();

  while (true) {
    const userInput = readlineSync.question(colors.yellow('You: '));

    try {
      const result = await chat.sendMessage(userInput);

      const botReply = result.response.text(); // Gemini's way to extract text

      console.log(colors.cyan(`Bot: ${botReply}`));
    } catch (error) {
      console.error(colors.red('Error: '), error.message);
    }
  }
}

main();
