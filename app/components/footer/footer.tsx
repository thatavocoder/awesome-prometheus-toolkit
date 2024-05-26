import Link from 'next/link';
import React from 'react';
import { GithubData } from '../header/classes';
import { getGithubInfo } from '../header/api';
import Image from 'next/image';

const Footer = async () => {
  const githubData: GithubData = await getGithubInfo();

  return (
    <div className="w-full px-6 md:px-20 lg:px-40 xl:px-60 py-4.5 border-t border-slate-100 fixed bottom-0 flex items-center justify-between">
      <Link
        href={githubData.html_url}
        target="_blank"
        className="text-xs text-slate-400"
      >
        Contribute on GitHub
      </Link>
      <div className="flex items-center gap-1">
        <p className="text-xs text-slate-400">Maintained by Last9</p>
        <Image src={'/last9-logo.svg'} alt="Last9" width={20} height={20} />
      </div>
    </div>
  );
};

export default Footer;
