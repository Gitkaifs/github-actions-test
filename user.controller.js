import {
    getUser as getUser1,
    getSingleUser as getSingleUser1 ,
    createUser as createUser1,
    deleteUser as deleteUser1,
    updateUser as updateUser1
} from './user.service.js'

export const getUser = async(req,res,next)=>{
    try {
        const user = await getUser1()
        return res.status(200).json({message:"users fetched successfully",user}) 
    } catch (error) {
        next(error)
    }
}

export const getSingleUser = async(req,res,next)=>{
    try {
        const{id}=req.params
        const user = await getSingleUser1(id)
        return res.status(200).json({message:"user fetched successfully",user}) 
    } catch (error) {
        next(error)
    }
}

export const createUser = async(req,res,next)=>{
    try {
        const{name, age} = req.body
        const user = await createUser1(name,age)
        return res.status(200).json({message:"users created successfully"}) 
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async(req,res,next)=>{
    try {
        const{id}=req.params
        const user = await deleteUser1(id)
        return res.status(200).json({message:"users deletd successfully",user}) 
    } catch (error) {
        next(error)
    }
}

export const updateUser = async(req,res,next)=>{
    try {
        const{id}=req.params
        const{name,age}=req.body
        const user = await updateUser1(id,name, age)
        return res.status(200).json({message:"users updated successfully"}) 
    } catch (error) {
        next(error)
    }
}