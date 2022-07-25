const Player = require('../models/player')

const getAllPlayers = async (req, res, next) =>{
    try {
        const player = await Player.find()
        res.status(200).json({
            success:true,
            data:player
        })
    } catch (error) {
        next(error)
    }
    
}
const createPLayer = async (req, res, next) =>{
    try {
        const player = new Player(req.body)
        const newPlayer = await player.save()
        res.status(200).json({
        success:true,
        data:newPlayer
    })
    } catch (error) {
       next(error) 
    }
    
}

const getOnePlayer = async (req, res, next) =>{
    try {
        const playerExist = await Player.findById(req.params._id)
        if(!playerExist) res.status(400).json({"message":"player not found"})
        else{
        const player = await Player.find({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:player
        })}
    } catch (error) {
        next(error)
    }
}
const removePlayer = async (req, res, next) =>{
    try {
        const playerExist = await Player.findById(req.params._id)
        if(!playerExist) res.status(400).json({"message":"player not found"})
        else{
        const player = await Player.deleteOne({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:player
        })}
    } catch (error) {
        next(error)
    }
}
const updatePlayer = async (req, res, next) =>{
    try {
        const playerExist = await Player.findById(req.params._id)
        if(!playerExist) res.status(400).json({"message":"player not found"})
        const player = await Player.findByIdAndUpdate(req.params._id, req.body,{new:true})
        res.status(200).json({
            success:true,
            data:player
        })
    } catch (error) {
        next(error)
    }
}
module.exports = {getAllPlayers, createPLayer, getOnePlayer, removePlayer, updatePlayer}