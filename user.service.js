import { userModel } from "./user.model.js";

export const getUser = async()=>{
    const user = await userModel.find()
    return user
}

export const getSingleUser = async(id)=>{
    const singleUser = await userModel.findById(id)
    return singleUser
}

export const createUser = async(name,age)=>{
    const user = await userModel.create({name, age})
    return user
}

export const deleteUser = async(id)=>{
    const user = await userModel.findByIdAndDelete(id);
    return user
}

export const updateUser = async(id,name,age)=>{
    const user = await userModel.findByIdAndUpdate(id, { name, age }, { new: true });
    return user
}