
import { generateToken } from "../utils/token.generator.js";


const defaultUser={
   id: 1,
   name: "Admin",
   email:"admin@admin.com",
   password:"admin123",
   admin: true 

};

export const login = (req, res) => {
   
   const {email, password} = req.body;

   if(!email || !password){
      return res.status(422).json({ 
        message: "Faltan datos obligatorios" });
   }

   if(email !== defaultUser.email || password !== defaultUser.password){
      return res.status(401).json({ 
        message: "Credenciales inválidas" });
   }    

    const token = generateToken(defaultUser);
   
    res.json({ 
        message: "Login exitoso",
        token,
    });

};