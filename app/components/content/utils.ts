import yaml from 'js-yaml';

export const ymlToJson = <T>(yml: string): T => {
  const cleanedYaml = yml
    .split('\n')
    .filter((line) => !line.trim().startsWith('#'))
    .join('\n');

  const parsedData = yaml.load(cleanedYaml) as T;

  return parsedData;
};
