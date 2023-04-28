import { User } from '@data/data';
import {
  useMutation,
  useQueryClient,
  UseMutationOptions,
} from '@tanstack/react-query';
import axios from '@axios/axios';

const API_URL = 'http://localhost:3000';

const createUser = async (user: User) => {
  const { data } = await axios.post(`${API_URL}/users`, user);
  return data;
};

export const useAddUserMutation = (
  config?: UseMutationOptions<User, Error, User>,
) => {
  const queryClient = useQueryClient();

  return useMutation(createUser, {
    ...config,
  });
};
