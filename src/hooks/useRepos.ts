import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import api from '../api/github';
import { Repository } from './types';

const fetchRepos = async (ctx: QueryFunctionContext) => {
  const [_, githubUser] = ctx.queryKey;
  const { data } = await api.get<Repository[]>(`/users/${githubUser}/repos`);
  return data;
};

export const useFetchRepositories = (githubUser: string) => {
  return useQuery({ queryKey: ['repos', githubUser], queryFn: fetchRepos });
};
