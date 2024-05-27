'use client';

import React from 'react';
import SearchInput from './search-input';
import { RulesData } from './classes';
import CardGrid from './card-grid';

interface GroupsDataProps {
  rulesData: RulesData;
}

const GroupsData = ({ rulesData }: GroupsDataProps) => {
  const handleSearch = (searchString: string) => {
    console.log('searchString', searchString);
  };

  return (
    <>
      <SearchInput handleSearch={handleSearch} />
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
    </>
  );
};

export default GroupsData;
