const Posts = require('../models/posts.models')

const findAllPosts = async() => {
    //? Your code here:
    const data = await Posts.findAll()
    return data
}

const findPostById = async(id) => {
    //? Your code here:
    const data = await Posts.findOne({
        where:{
            id: id 
        }
    })
    return data
}

const createPost = async(postObject) => {
    //? Your code here:
    const newPost = {
        content: postObject.content ,
        userName: postObject.userName ,
        isPublished: postObject.isPublished 
        }
    const data = await Posts.create(newPost)
    return data
      
}

const updatePost = async(id, postObject) => {
    //? Your code here:
    const data = await Posts.update(postObject, {
        where: {
          id: id
        }
      })
      return data[0]
}

const deletePost = async(id) => {
    //? Your code here:
    const data = await Posts.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}
