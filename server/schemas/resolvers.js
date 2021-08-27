const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({})
      .populate('savedBooks');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedBooks');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
        .populate('savedBooks');
      }
    }
  }
}

module.exports = resolvers;