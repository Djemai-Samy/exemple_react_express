import express from "express";
const app = express();
const port = 3001;

app.use(express.json())

app.get('/bonjour', (req,rep)=>{
  rep.json({message: "Bonjour!"})
})

  app.listen(port, () => {
    console.log("Serveur lancé sur le port: " + port);
  });
  
