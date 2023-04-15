import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  age: number;
}

const users = [
  { id: 2, name: 'anry', age: 23 },
  { id: 3, name: 'lk', age: 50 },
  { id: 4, name: 'kak', age: 2 },
];

const getUsers = (): Promise<User[]> => {
  return new Promise<User[]>((resolve, reject) => {
    if (users) {
      resolve(users);
    } else {
      reject(new Error('No users found'));
    }
  });
};

const useGetUsersQuerty = () => {
  return useQuery(['users'], getUsers);
};
