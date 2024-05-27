import { get } from '../../shared/service';

export const getRulesYml = async (): Promise<string> => {
  try {
    const res: Response = await get(
      'https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/_data/rules.yml',
    );
    const data = await res.text();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch rules.yml');
  }
};

export const getRulesDetailsYml = async (
  service: string,
  ruleSlug: string,
): Promise<string> => {
  const serviceName = service.replace(/ /g, '-').toLowerCase();

  try {
    const res: Response = await get(
      `https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/${serviceName}/${ruleSlug}.yml`,
    );
    const data = await res.text();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch ${service}/${ruleSlug}.yml`);
  }
};

export const isImageFound = async (url: string): Promise<boolean> => {
  try {
    await get(url);
    return true;
  } catch (error) {
    return false;
  }
};
