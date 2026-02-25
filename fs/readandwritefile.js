import fs from 'fs';


const writefilesync = () =>{

    try {
    fs.writeFileSync('example.txt', 'This is an example text written using writeFileSync.');
    console.log('File written successfully using writeFileSync.');
    } catch (err) {
    console.error('Error writing file using writeFileSync:', err);
    }
}

const readfilesync = () => {
    try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('File read successfully using readFileSync:');
    console.log(data);
    } catch (err) {
    console.error('Error reading file using readFileSync:', err);
    }
}


const appendfilesync = () => {
    try {
    fs.appendFileSync('example.txt', '\nThis text is appended using appendFileSync.');
    console.log('File appended successfully using appendFileSync.');
    } catch (err) {
    console.error('Error appending file using appendFileSync:', err);
    }
}


// appendfilesync();
// writefilesync();
// readfilesync();


const readfile = (data) => {
    fs.readFile(data, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file using readFile:', err);
            return;
        }
        console.log('File read successfully using readFile:');
        console.log(data);
    });
}

const writefile = (data, content) => {
    fs.writeFile(data, content, (err) => {
        if (err) {
            console.error('Error writing file using writeFile:', err);
            return;
        }
        console.log('File written successfully using writeFile.');
    });
}

const appendfile = (data, content) => {
    fs.appendFile(data, content, (err) => {
        if (err) {
            console.error('Error appending file using appendFile:', err);
            return;
        }
        console.log('File appended successfully using appendFile.');
    });
}

 appendfile('example.txt', '\nThis text is appended using appendFile.');
 writefile('example.txt', 'This is an example text written using writeFile.');
 readfile('example.txt');