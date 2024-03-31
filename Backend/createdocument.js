const connectDB = require('./connection');
const laptopSchema = require('./schema');

connectDB('mongodb+srv://freebe:zxC1KeiXrQJsx1z0@cluster0.naau8hg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


const upload = async ()=>{
    await laptopSchema.create()
    .then(()=>console.log('Uploaded!'))
    .catch((err)=>console.log(err));
}
upload();