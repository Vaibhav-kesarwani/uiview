'use client';
import { useTheme } from 'next-themes';
import React from 'react';
import Link from 'next/link';

import { Github } from 'lucide-react';
import { SearchDialog } from './searchbar';
import MobileHeader from './moibile-header';
import ThemeSwitch from './theme-switch';
import GitHubButton from '@/registry/components/github-repo-btn';
import MainComponentsDownloader from './downloadallarray';
// import MobileHeader from './moibile-header'

function Header() {
  return (
    <>
      <header className=' fixed left-0 top-0 z-20 w-full pt-2 dark:bg-zinc-950 bg-primary-foreground'>
        <div className='mx-auto flex items-center justify-between gap-2 border px-2 rounded-lg 2xl:container xl:w-[96%] lg:w-[98%] w-[98%] dark:bg-black/40 bg-zinc-100 py-2 backdrop-blur-lg'>
          <Link href='/' className='hidden lg:block'>
            <div className='relative hidden gap-2 pl-0.5 lg:flex'>
              <svg
                width='288'
                className='xl:w-40 w-28 h-full dark:fill-white fill-black'
                height='63'
                viewBox='0 0 288 63'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d="M35.152 47.528V43.448H30.928V16.376H37.024V41H47.872V16.376H54.016V43.448H49.744V47.528H35.152ZM59.8499 47.528V41H64.0739V22.952H59.8499V16.376H74.4419V22.952H70.1699V41H74.4419V47.528H59.8499ZM98.3448 47.528V43.448H94.1208V35.192H89.8968V16.376H95.9928V32.744H100.217V41H102.617V32.744H106.841V16.376H112.985V35.192H108.713V43.448H104.489V47.528H98.3448ZM121.121 47.528V43.448H116.897V28.712H121.121V24.584H135.713V28.712H139.985V35.192H133.841V31.112H122.993V32.744H131.489V39.32H122.993V41H133.841V36.824H139.985V43.4H135.713V47.528H121.121ZM150.043 47.528V43.448H145.819V28.712H150.043V24.584H164.635V28.712H168.907V35.192H162.763V31.112H151.915V41H162.763V36.872H168.907V43.448H164.635V47.528H150.043ZM180.798 47.528V43.448H176.574V31.112H172.35V24.584H176.574V16.376H182.67V24.584H195.438V31.112H182.67V41H193.566V36.872H199.71V43.448H195.438V47.528H180.798ZM208.355 47.528V43.448H204.131V28.712H208.355V24.584H222.947V28.712H227.219V43.448H222.947V47.528H208.355ZM210.227 41H221.075V31.112H210.227V41ZM233.053 47.528V28.712H237.277V24.584H251.869V28.712H256.141V35.192H249.997V31.112H239.149V47.528H233.053Z"/>
              </svg>
            </div>
          </Link>

          <MobileHeader classname='lg:hidden block' />

          <div className='flex gap-2 '>
            <SearchDialog classname='sm:w-52 md:w-72' />
            <GitHubButton />
            <a
              target='_blank'
              href='https://x.com/Vaibhav_k__'
              className='border flex-shrink-0 bg-primary  text-primary-foreground text-2xl w-12   grid  place-content-center    rounded-md'
            >
              <svg
                width='120'
                height='109'
                viewBox='0 0 120 109'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className=' fill-primary-foreground w-6 h-5'
              >
                <path d='M94.5068 0H112.907L72.7076 46.172L120 109H82.9692L53.9674 70.8942L20.7818 109H2.3693L45.3666 59.6147L0 0H37.9685L64.1848 34.8292L94.5068 0ZM88.0484 97.9318H98.2448L32.4288 10.4872H21.4882L88.0484 97.9318Z' />
              </svg>
            </a>

            <ThemeSwitch
              className='bg-background border w-12 rounded-md h-11 flex-shrink-0
          '
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
