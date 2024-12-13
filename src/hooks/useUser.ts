import axiosInstance from "@/libs/axios";
import { Repository } from "@/types/repos";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

interface UserReposOptions {
  options?: Omit<UseQueryOptions<Repository[], Error>, "queryKey" | "queryFn">;
}

export const useUser = (username: string, { options }: UserReposOptions) => {
  return useQuery<Repository[], Error>({
    queryKey: ["userRepos", username],
    queryFn: async () => {
      if (!username) return [];

      try {
        const { data } = await axiosInstance.get<Repository[]>(
          `users/${username}/repos`,
        );
        return data;
      } catch (error) {
        throw new Error("Failed to fetch repositories");
      }
    },
    ...options,
  });
};
