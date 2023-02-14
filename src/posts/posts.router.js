const postServices = require('./posts.services')

const router = require('express').Router()

router.get('/posts', postServices.getAllPost)

router.get('/posts/:id', postServices.getAllPostById)

router.post('/posts', postServices.postNewPost)

router.delete('/posts/:id', postServices.deletePosts)

module.exports = router