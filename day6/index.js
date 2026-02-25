import fs from "fs/promises";
import { readFile, writeFile } from "../day4/readAndWrite.js";

const filePath = "users.json";

async function register(data) {
    const file = await readFile(filePath);
    if (!file) {
        console.log("Unable to read users file");
        return;
    }
    const users = JSON.parse(file);

    if (users.find(u => u.email === data.email)) {
        console.log("User already exists");
        return;
    }
    
    users.push(data);

    await writeFile(filePath, JSON.stringify(users, null, 2));
}

const login = async (email, password) => {
    const fileData = await readFile(filePath);
    if (!fileData) return false;

    const users = JSON.parse(fileData);
    return users.find(u => u.email === email && u.password === password);
};

await register({ id: 3, username: "ansh3", email: "ansh3@example.com", password: "1234" });
const user = await login("ansh@example.com", "1234");
console.log("Login result:", user);
