import {readFile, writeFile} from "../day4/readAndWrite.js";

const deleteData = async (path, id) => {
    const data = await readFile(path);
    if (!data) {
        console.log("File not found");
        return;
    }
    const parsedData = JSON.parse(data);
    const filteredData = parsedData.filter((item) => item.id !== id);
    await writeFile(path, JSON.stringify(filteredData));
}
deleteData("../day4/students.json", 2);


//id ,name ,email,password
//create this json file and add some data to it
//then regster dunctin
//login read and check user
//update password --update function
//delete account --delete function

