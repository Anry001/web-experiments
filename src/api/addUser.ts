import { User } from '@/data/data';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

const createUser = async (user: User) => {
  const { data } = await axios.post(`${API_URL}/users`, user);
  return data;
};

export const useAddUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: (user) => {
      console.log('successfully added user: ', user);
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
