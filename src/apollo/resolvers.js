import { modalResolvers } from './actions/modal';
import { userResolvers } from './actions/user';

const resolvers = {
  Mutation: {
    ...modalResolvers,
    ...userResolvers
  }
};

export default resolvers;
