import { useQuery } from '@tanstack/react-query';
import { users } from './data';

interface User {
  id: number;
  name: string;
  age: number;
}

const getUsers = (): Promise<User[]> => {
  return new Promise<User[]>((resolve, reject) => {
    if (users) {
      resolve(users);
    } else {
      reject(new Error('No users found'));
    }
  });
};

export const useGetUsersQuery = () => {
  return useQuery(['users'], getUsers);
};
