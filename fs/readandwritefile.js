import fs, { readFileSync } from 'fs';

const writefilesync = () => {
    try {
        fs.writeFileSync('example.txt', 'Hello, this is a sample text written to the file.');
        console.log('File written successfully using writeFileSync.');
    }
    catch (err) {
        console.error('Error writing file using writeFileSync:', err);
    }   
};


// writefilesync();

const readfilesync = () => {
    try {
        const data = fs.readFileSync('example.txt', 'utf8'); 
        console.log('File read successfully using readFileSync. Content:');
        console.log(data);
    }
    catch (err) {
        console.error('Error reading file using readFileSync:', err);
    }   
};  

const  appendfilesync