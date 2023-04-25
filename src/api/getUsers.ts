import { useQuery } from '@tanstack/react-query';
import { User } from '@data/data';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getUsers = async () => {
  const { data } = await axios.get<User[]>(`${API_URL}/users`);
  return data;
};

export const useGetUsersQuery = () => {
  return useQuery({ queryKey: ['users'], queryFn: getUsers });
};
