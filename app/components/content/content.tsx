import React from 'react';
import SearchInput from './search-input';
import Image from 'next/image';

const Content = () => {
  return (
    <main className="px-6 md:px-20 lg:px-40 xl:px-60 pt-32 flex flex-col gap-4">
      <p className="text-xl font-medium font-inter text-slate-600">
        Browse Library
      </p>
      <SearchInput />
      <p className="text-2xs font-bold uppercase font-inter text-slate-400">
        Basic Resource Monitoring
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div className="border border-slate-100 p-6">
          <div className="flex items-center gap-2">
            <Image
              src="last9-logo.svg"
              alt="monitoring"
              width={24}
              height={24}
            />
            <p className="text-sm font-bold text-slate-600">
              Prometheus self-monitoring
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
