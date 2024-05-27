'use client';

import React, { useState } from 'react';

interface SearchInputProps {
  handleSearch: (searchString: string) => void;
}

const SearchInput = ({ handleSearch }: SearchInputProps) => {
  const [search, setSearch] = useState('');

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search for a component"
        className={`py-1.5 px-9 w-full outline-none border border-slate-200 rounded text-xs bg-search-icon bg-no-repeat bg-left-4 bg-4 text-slate-500`}
        value={search}
        onChange={(e) => {
          handleSearch(e.target.value);
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch(search);
          }
        }}
      />
      <button
        className="bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border border-slate-100 text-slate-500 absolute right-4 w-4.5 h-4.5 text-xs"
        onClick={() => {
          handleSearch(search);
        }}
      >
        /
      </button>
    </div>
  );
};

export default SearchInput;
