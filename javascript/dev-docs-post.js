import { promises as fs } from 'fs';
import process from 'process';

import yargs from 'yargs/yargs'

import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv)).argv;


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function readFromFile(filename) {
    try {
        const content = await fs.readFile(filename, 'utf8');
        return content;
    } catch (error) {
        console.error('Error reading the file:', error);
        throw error;
    }
}

async function main() {
    try {
        if(argv.command == "node assistants.js") {
            await delay(5000)
            const response = await readFromFile(`${process.cwd()}/javascript/response.txt`)
            
            const output = JSON.stringify({
                modal: "yes", 
                title: "Hey this is dyanmic", 
                content: `This is the assistant stuff ${response}`, 
                link: 'https://openai.com'
            });
            console.log(output);
        } else {
            const output = JSON.stringify({
                modal: "yes", 
                title: "Hey this is dyanmic", 
                content: argv.command, 
                link: 'https://openai.com'
            });
            console.log(output);
        }
        

    } catch (error) {
        console.error('An error occurred in main:', error);
    }
}

main();


