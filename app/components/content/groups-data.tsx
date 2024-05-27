'use client';

import React, { useState } from 'react';
import SearchInput from './search-input';
import { Group, RulesData } from './classes';
import CardGrid from './card-grid';

interface GroupsDataProps {
  rulesData: RulesData;
}

const GroupsData = ({ rulesData }: GroupsDataProps) => {
  const [filteredGroupsData, setFilteredGroupsData] = useState<Group[]>(
    rulesData.groups,
  );

  const handleSearch = (searchString: string) => {
    const filteredGroups = rulesData.groups.map((group) => ({
      ...group,
      services: group.services.filter((service) =>
        service.name.toLowerCase().includes(searchString.toLowerCase()),
      ),
    }));

    setFilteredGroupsData(filteredGroups);
  };

  return (
    <>
      <SearchInput handleSearch={handleSearch} />
      <div className="flex flex-col gap-10">
        {filteredGroupsData.map((group) => {
          if (group.services.length > 0) {
            return (
              <div key={group.name} className="flex flex-col gap-4">
                <p className="text-2xs font-bold uppercase font-inter text-slate-400">
                  {group.name}
                </p>
                <CardGrid group={group} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};

export default GroupsData;
