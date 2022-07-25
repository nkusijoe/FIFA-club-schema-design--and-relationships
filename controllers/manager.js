const Manager = require('../models/manager')

const getAllManagers = async (req, res, next) =>{
    try {
        const manager = await Manager.find()
        res.status(200).json({
            success:true,
            data:manager
        })
    } catch (error) {
        next(error)
    }
    
}
const createManager = async (req, res, next) =>{
    try {
        const manager = new Manager(req.body)
        const newManager = await manager.save()
        res.status(200).json({
        success:true,
        data:newManager
    })
    } catch (error) {
       next(error) 
    }
    
}

const getOneManager = async (req, res, next) =>{
    try {
        const managerExist = await Manager.findById(req.params._id)
        if(!managerExist) res.status(400).json({"message":"manager not found"})
        else{
        const manager = await Manager.find({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:manager
        })}
    } catch (error) {
        next(error)
    }
}
const removeManager = async (req, res, next) =>{
    try {
        const managerExist = await User.findById(req.params._id)
        if(!managerExist) res.status(400).json({"message":"manager not found"})
        else{
        const manager = await Manager.deleteOne({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:manager
        })}
    } catch (error) {
        next(error)
    }
}
const updateManager = async (req, res, next) =>{
    try {
        const managerExist = await Manager.findById(req.params._id)
        if(!managerExist) res.status(400).json({"message":"manager not found"})
        const manager = await Manager.findByIdAndUpdate(req.params._id, req.body,{new:true})
        res.status(200).json({
            success:true,
            data:manager
        })
    } catch (error) {
        next(error)
    }
}
module.exports = {getAllManagers, createManager, getOneManager, removeManager, updateManager}