import { useQuery, UseQueryOptions } from "react-query";

import { api } from "services/api";

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type getUsersResponse = {
  users: User[];
  totalCount: number;
};

export async function getUsers(page: number): Promise<getUsersResponse> {
  const { data, headers } = await api.get("/users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => ({
    ...user,
    createdAt: new Date(user.created_at).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));

  return { users, totalCount };
}

type UseUsersOptions = {
  initialData: {
    users: User[];
    totalCount: number;
  };
};

export function useUsers(page: number, options: UseUsersOptions) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 min
    initialData: options.initialData,
  });
}
