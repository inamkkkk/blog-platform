const Post = require('../models/Post');

exports.createPost = async (req, res, next) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.user.userId // Assuming userId is stored in req.user after authentication
    });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if(post.author.toString() !== req.user.userId) {
        return res.status(403).json({message: 'Unauthorized'});
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    const updatedPost = await post.save();

    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if(post.author.toString() !== req.user.userId) {
        return res.status(403).json({message: 'Unauthorized'});
    }

    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    next(error);
  }
};