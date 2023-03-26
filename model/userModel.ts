import mongoose, { Schema } from "mongoose";
interface User{
    name: string;
    imgUrl: string;
}
const userSchema = new Schema<User>({
    name:{type:String ,required:true},
    imgUrl:{type:String}
},{timestamps:true})

const userModel=  mongoose.model('User',userSchema)
export {userModel}