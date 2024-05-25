import { get } from '../../shared/service';
import { GithubData } from './classes';

export const getGithubInfo = async (): Promise<GithubData> => {
  const data: Promise<GithubData> = get(
    'http://api.github.com/repos/samber/awesome-prometheus-alerts',
  );

  return data;
};
