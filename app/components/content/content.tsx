import React from 'react';
import SearchInput from './search-input';
import { getRulesYml } from './api';
import { ymlToJson } from './utils';
import { RulesData } from './classes';
import CardGrid from './card-grid';

const Content = async () => {
  const rulesDataYml = await getRulesYml();
  const rulesData: RulesData = ymlToJson(rulesDataYml);

  return (
    <main className="px-6 md:px-20 lg:px-40 xl:px-60 pt-32 pb-20 flex flex-col gap-4">
      <p className="text-xl font-medium font-inter text-slate-600">
        Browse Library
      </p>
      <SearchInput />
      <div className="flex flex-col gap-12">
        {rulesData.groups.map((group) => (
          <div key={group.name} className="flex flex-col gap-4">
            <p className="text-2xs font-bold uppercase font-inter text-slate-400">
              {group.name}
            </p>
            <CardGrid group={group} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Content;
