const express = require('express');
const app = express();
const connectDB = require('./connection.js');
const schems = require('./schema.js');

connectDB('mongodb+srv://freebe:zxC1KeiXrQJsx1z0@cluster0.naau8hg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const create = async ()=>{
    await schems.create()
    .then(()=>console.log('Created!'))
    .catch((err)=>console.log(err));
}

create();