// import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
  console.log(`http://localhost:${port}`);
} );


