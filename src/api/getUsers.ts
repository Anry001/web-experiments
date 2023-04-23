import { useQuery } from '@tanstack/react-query';
import { User, users } from '@data/data';

export const getUsers = async (): Promise<User[]> => {
  return users;
};

// export const useGetUsersQuery = () => {
//   return useQuery({ queryKey: ['users'], queryFn: getUsers });
// };
