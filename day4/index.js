import { readFile, writeFile } from "../day4/readAndWrite.js";

const filePath = "../day6/users.json";

const register = async (data) => {
    try {
        const fileData = await readFile(filePath);
        let updatedData = [];
        if (!fileData) {
            updatedData = [{ id: 1, ...data }];
        } else {
            const oldData = JSON.parse(fileData);
            const userExists = oldData.find(user => user.email === data.email);
            if (userExists) {
                console.log("User already exists. Please login.");
                return;
            }
            updatedData = [
                ...oldData,
                { id: oldData.length + 1, ...data }
            ];
        }
        await writeFile(filePath, JSON.stringify(updatedData, null, 2));
        console.log("User registered successfully!");
    } catch (error) {
        console.log("Service not working...");
    }
};

const login = async (email, password) => {
    try {
        const fileData = await readFile(filePath);
        if (!fileData) {
            console.log("No users found.");
            return;
        }
        const users = JSON.parse(fileData);
        const user = users.find(
            user => user.email === email && user.password === password
        );
        if (user) {
            console.log("Login successful!");
        } else {
            console.log("Invalid email or password.");
        }
    } catch (error) {
        console.log("Service not working...");
    }
};

await register({ username: "aman1", email: "aman@example.com", password: "1234" });
await login("aman@example.com", "1234");
