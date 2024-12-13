import axiosInstance from "@/libs/axios";
import { User } from "@/types/user";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";

interface SearchUserOptions {
  options?: Omit<
    UseMutationOptions<User | null, Error, string, unknown>,
    "mutationFn"
  >;
}
export const useSearchUser = ({
  options,
}: SearchUserOptions): UseMutationResult<
  User | null,
  Error,
  string,
  unknown
> => {
  const mutationFn = async (username: string): Promise<User | null> => {
    if (!username) throw new Error("Username cannot be empty");

    try {
      const { data } = await axiosInstance.get<User>(`users/${username}`);
      return data || null;
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
  };

  const mutation = useMutation<User | null, Error, string, unknown>({
    mutationFn,
    ...options,
  });

  return mutation;
};
