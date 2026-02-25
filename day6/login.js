import { readFile } from 'fs/promises';

const userlogin = async(data) => {
 const {email, password} = data;
 const userdata = JSON.parse(await readFile(new URL('./users.json', import.meta.url), 'utf8'));
 if(userdata.length === 0) {
    return null;
 }
 const user = userdata.filter(u => u.email === email);
 if(user.length === 0) {
   console.log("user not registered");
   return null;
 }
 const userPassword = userdata.filter(u => u.password === password);
 if(userPassword.length === 0) {
   console.log("incorrect password");
   return null;
   
 }
 return user;
}


const main = async () => {
    const result = await userlogin({
        email: "ansh@tyagi.com",
        password: "797789"
    })
    console.log(result)
}

main();