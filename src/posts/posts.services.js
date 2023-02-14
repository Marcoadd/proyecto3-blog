const {json} = require('express')
const postController = require('./posts.controllers')

const getAllPost = (req, res) => {
  postController.findAllPosts()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

const getAllPostById = (req, res) => {
  const id = req.params.id
  postController.findPostById(id)
    .then(data => {
      if(data){
        res.status(200).json(data)
      }else{
        res.status(404).json({message: 'Post not found'})
      }
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

const postNewPost = (req, res) => {
  const productObje = req.body
  postController.createPost(productObje)
    .then( data  => {
      res.status(201).json(data)
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

const deletePosts = (req, res) => {
  const id = req.params.id
  postController.deletePost(id)
   .then(data => {
      if(data){
        res.status(204).json({message: 'Hola mundo'})
      }else{
        res.status(404).json({message: 'Post not Found'})
      }
   })
   .catch(err => {
    res.status(400).json(err)
   })
}

module.exports = {
  deletePosts,
  getAllPost,
  getAllPostById,
  postNewPost
}
