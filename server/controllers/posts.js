import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
     try {
          const postMessages = await PostMessage.find();

          res.status(200).json(postMessages);
     } catch (err) {
          res.status(404).json(err);
     }
};

export const createPost = async (req, res) => {
     try {
          const post = req.body;

          const newPost = new PostMessage(post);

          await newPost.save();

          res.status(201).json(newPost);
     } catch (error) {
          res.status(409).json(error);
     }
};