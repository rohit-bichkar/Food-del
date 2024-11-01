import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rohitbichkarudict:99998642@cluster0.flt70.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}