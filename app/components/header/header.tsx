import Image from 'next/image';
import React from 'react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { getGithubInfo } from './api';
import { GithubData } from './classes';
import { formatNumber } from '../../shared/utils';
import Link from 'next/link';

const Header = async () => {
  const githubData: GithubData = await getGithubInfo();
  const starCount = githubData.stargazers_count;
  const formattedStarCount = formatNumber(starCount);

  return (
    <div className="w-full h-full px-60 flex items-end justify-between border-b border-slate-200">
      <Image
        src="/logo.png"
        alt="logo"
        height={100}
        width={100}
        className="h-[72px] w-auto"
      />
      <Link
        href={githubData.html_url}
        className="py-2 flex items-center gap-2 text-slate-500"
      >
        <SiGithub className="h-5 w-5" />
        <p>{formattedStarCount} stars</p>
      </Link>
    </div>
  );
};

export default Header;
