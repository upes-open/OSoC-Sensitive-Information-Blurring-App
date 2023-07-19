import express from "express";
import DBconnection from "./database/db.js";

const app =express();

const PORT=8000;

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))

DBconnection()