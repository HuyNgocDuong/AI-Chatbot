import {Configuration, OpenAIApi} from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);

async function main(){
    const chatCompletion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {role: 'user', content: 'What is the capital of VietNam?'},
        ],
    });
    console.log(chatCompletion.data.choices [0].message.content);
}

main();