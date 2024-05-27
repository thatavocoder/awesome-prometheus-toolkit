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

export const getRulesDetailsYml = (service: string, ruleSlug: string) => {
  const serviceName = service.replace(/ /g, '-').toLowerCase();
  const res = get(
    `https://raw.githubusercontent.com/samber/awesome-prometheus-alerts/master/dist/rules/${serviceName}/${ruleSlug}.yml`,
  )
    .then((res) => {
      const text = res.text();
      return text;
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));

  return res;
};
