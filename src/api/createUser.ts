// import { useMutation } from '@tanstack/react-query';
import { User, users } from '@data/data';

// export interface User {
//   id: string;
//   name: string;
//   age: string;
// }

// export let users: User[] = [
//   { id: '2', name: 'faf', age: '23' },
//   { id: '3', name: 'lk', age: '50' },
//   { id: '4', name: 'kak', age: '2' },
// ];

export const createUser = async (user: User): Promise<User> => {
  let newUser: User = user;
  console.log(newUser);
  users.push(newUser);
  console.log(users);
  return newUser;
};

// export const useCreateUserMutation = () => {
//   return useMutation({
//     mutationKey: ['users'],
//     mutationFn: createUser,
//     onSuccess: (data) => {
//       console.log(data);
//     },
//   });
// };
