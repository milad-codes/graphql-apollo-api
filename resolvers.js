const Post = require('./models/Post.model')

const resolvers = {
  Query: {
    getAllPosts: async () => {
      return await Post.find()
    },
    getPost: async (parent, { id }, context, info) => {
      return await Post.findById(id)
    },
  },

  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, description } = args.post
      return await new Post({ title, description }).save()
    },

    deletePost: async (parent, args, context, info) => {
      await Post.findByIdAndDelete(args.id)
      return 'Post deleted successfully!'
    },

    updatePost: async (parent, args, context, info) => {
      const { title, description } = args.post

      return await Post.findByIdAndUpdate(
        args.id,
        {
          title,
          description,
        },
        {
          new: true,
        }
      )
    },
  },
}

module.exports = resolvers
