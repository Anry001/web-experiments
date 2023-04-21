import { useMutation } from '@tanstack/react-query';
import { User, users } from '@data/data';

const createUser = async (user: User): Promise<User> => {
  const newUser: User = { ...user };
  users.push(newUser);
  return newUser;
};

export const useCreateUserMutation = () => {
  return useMutation(['users'], createUser);
};
