import { get } from '../../shared/service';
import { GithubData } from './classes';

export const getGithubInfo = async (): Promise<GithubData> => {
  try {
    const res: Response = await get(
      'http://api.github.com/repos/samber/awesome-prometheus-alerts',
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to fetch GitHub info');
    }
    const data: GithubData = await res.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch GitHub info');
  }
};
