import mongoose from "mongoose";

function db() {
    mongoose.connect('mongodb://127.0.0.1:27017/uploadImg').then((result)=>{
        console.log('connected');
    })
}



export {db}