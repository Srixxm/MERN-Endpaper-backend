const express = require('express')

const newsModel = require('../models/newsModel')


const getNews = async(request, response) => {
    try{
        const news = await newsModel.find()
        response.status(200).json(news)
    }
    catch(error) {
        response.status(500).send({message:"News not found"})
    }

}

const getNewsbyid = async(request,response)=> {
    response.send(news)
}


const postNews = async (request, response) => {
    const postedNews = new newsModel({
        firstName:request.body.firstName,
        lasttName:request.body.lasttName,
        email:request.body.email,
        title: request.body.title,
        outline: request.body.outline,
        content: request.body.content,
        DateofUpload: request.body.DateofUpload
    })
    try{
        const news = await postedNews.save()
        response.status(201).json(news)
    }
    catch(error){
        response.status(504).json({message: "couldnt post news"})
    }

}

async function getID(request, response, next) {
    let news
    try{
        news = await newsModel.findById(request.params.id)
        if(news == null){
            return response.status(404).json({message:"enter a valid id."})
        }
        response.news = news 
        next()
    }

    catch(error) {
        return response.status(500).json({message: error})
    }
}
module.exports = {getNews, getID, getNewsbyid, postNews}