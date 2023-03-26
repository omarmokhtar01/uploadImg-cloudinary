import {Request,Response,NextFunction} from 'express';
import cloudinary from "cloudinary";
import {userModel} from '../model/userModel';

const getData =async (req:Request,res:Response,next:NextFunction)=>{
    const user=await userModel.find()
    res.send(user)
}

const sendData =async (req:Request,res:Response,next:NextFunction)=>{
     const img=await cloudinary.v2.uploader.upload(req.files!.imgUrl.tempFilePath ,{use_filename:true,folder:'Users'})
    const user=await userModel.create({name:req.body.name,imgUrl:img.secure_url})
    res.json(user)
}

export {getData,sendData}