import * as dotenv from 'dotenv' 
dotenv.config()

import express,{Request,Response} from 'express'
import fileUpload from 'express-fileupload';
import cloudinary from "cloudinary";

import {db} from './config/db'
import route from './routes/route'

const app = express();
db();

app.use(express.json())
app.use(fileUpload({useTempFiles :true,limits: { fileSize: 50 * 1024 * 1024 }}))

// Cloudinary configuration
cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
  });

app.use('/',route)


app.listen({port:3000})