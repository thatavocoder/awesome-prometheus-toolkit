'use client';

import React from 'react';

const SearchInput = () => {
  const [search, setSearch] = React.useState('');

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search for a component"
        className={`py-1.5 px-9 w-full outline-none border border-slate-200 rounded text-xs bg-search-icon bg-no-repeat bg-left-4 bg-4`}
        value={search}
        onChange={(e) => {
          if (e.target.value.endsWith('/')) {
            console.log('search');
          } else {
            setSearch(e.target.value);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            console.log('search');
          }
        }}
      />
      <button
        className="bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border border-slate-100 text-slate-500 absolute right-4 w-4.5 h-4.5 text-xs"
        onClick={() => {
          console.log('search');
        }}
      >
        /
      </button>
    </div>
  );
};

export default SearchInput;
