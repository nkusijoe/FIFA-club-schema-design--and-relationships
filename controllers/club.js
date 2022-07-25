const Club = require('../models/club')

const getAllClubs = async (req, res, next) =>{
    try {
        const club = await Club.find()
        res.status(200).json({
            success:true,
            data:club
        })
    } catch (error) {
        next(error)
    }
    
}
const createClub = async (req, res, next) =>{
    try {
        const club = new Club(req.body)
        const newClub = await club.save()
        res.status(200).json({
        success:true,
        data:newClub
    })
    } catch (error) {
       next(error) 
    }
    
}

const getOneClub = async (req, res, next) =>{
    try {
        const clubExist = await Club.findById(req.params._id)
        if(!clubExist) res.status(400).json({"message":"club not found"})
        else{
        const club = await Club.find({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:club
        })}
    } catch (error) {
        next(error)
    }
}
const removeClub = async (req, res, next) =>{
    try {
        const clubExist = await Club.findById(req.params._id)
        if(!clubExist) res.status(400).json({"message":"club not found"})
        else{
        const club = await Club.deleteOne({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:club
        })}
    } catch (error) {
        next(error)
    }
}
const updateClub = async (req, res, next) =>{
    try {
        const clubExist = await Club.findById(req.params._id)
        if(!clubExist) res.status(400).json({"message":"club not found"})
        const club = await Club.findByIdAndUpdate(req.params._id, req.body,{new:true})
        res.status(200).json({
            success:true,
            data:club
        })
    } catch (error) {
        next(error)
    }
}
module.exports = {getAllClubs, createClub, getOneClub, removeClub, updateClub}