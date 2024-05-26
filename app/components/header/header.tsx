import Image from 'next/image';
import React from 'react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { GithubData } from './classes';
import { formatNumber } from '../../shared/utils';
import Link from 'next/link';

interface HeaderProps {
  githubData: GithubData;
}

const Header = async ({ githubData }: HeaderProps) => {
  const starCount = githubData.stargazers_count;
  const formattedStarCount = formatNumber(starCount);

  return (
    <div className="w-full h-max px-6 md:px-20 lg:px-40 xl:px-60 flex items-end justify-between bg-white border-b border-slate-200 fixed top-0">
      <Link href="/">
        <Image
          priority
          src="/logo.png"
          alt="logo"
          height={100}
          width={100}
          className="h-[72px] w-auto"
        />
      </Link>
      <Link
        href={githubData.html_url}
        className="py-2 flex items-center gap-2 text-slate-500"
        target="_blank"
      >
        <SiGithub className="h-5 w-5" />
        <p>{formattedStarCount} stars</p>
      </Link>
    </div>
  );
};

export default Header;
