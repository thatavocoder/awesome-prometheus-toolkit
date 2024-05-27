import React from 'react';
import { getRulesYml } from './api';
import { ymlToJson } from './utils';
import { RulesData } from './classes';
import GroupsData from './groups-data';

const Content = async () => {
  const rulesDataYml = await getRulesYml();
  const rulesData: RulesData = ymlToJson(rulesDataYml);

  return (
    <main className="px-6 md:px-20 lg:px-40 xl:px-60 pt-32 pb-20 flex flex-col gap-4">
      <p className="text-xl font-medium font-inter text-slate-600">
        Browse Library
      </p>
      <GroupsData rulesData={rulesData} />
    </main>
  );
};

export default Content;
