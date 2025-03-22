import { X } from 'lucide-react';
import React, { useState } from 'react';
import { ScrollArea } from './ui/scroll-area';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { SidebarDrawer, DrawerContent } from '../core/drawer/vaul-sidebar';
import { basePath } from './sidebar';
import { MainComponents, SpecialComponents } from '@/configs/docs';
import { cn } from '@/lib/utils';

function MobileHeader({ classname }: { classname?: string }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <button
        className={cn(classname, 'text-3xl')}
        onClick={() => setSidebarOpen(true)}
      >
        {/* <HiOutlineMenuAlt2 /> */}
        <svg
          width='642'
          height='421'
          viewBox='0 0 642 421'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className=' stroke-primary w-9 h-9'
        >
          <path
            d='M52.333 359H252.333'
            strokeWidth='66.6667'
            strokeLinecap='round'
          />
          <path
            d='M52.333 212H452.333'
            strokeWidth='66.6667'
            strokeLinecap='round'
          />
          <path
            d='M52.333 65H585.666'
            strokeWidth='66.6667'
            strokeLinecap='round'
          />
        </svg>
      </button>
      <SidebarDrawer
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        direction={'left'}
        outsideClose={true}
        className='sm:w-[60%] w-[70%] p-4 h-screen '
      >
        <DrawerContent>
          <figure className='flex justify-between  w-full items-center'>
            <Link
              href='/'
              className='flex gap-2 items-center text-2xl font-semibold border-b  py-2'
            >
              <svg
                width='288'
                className='w-36 h-full dark:fill-white fill-black'
                height='63'
                viewBox='0 0 288 63'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M35.152 47.528V43.448H30.928V16.376H37.024V41H47.872V16.376H54.016V43.448H49.744V47.528H35.152ZM59.8499 47.528V41H64.0739V22.952H59.8499V16.376H74.4419V22.952H70.1699V41H74.4419V47.528H59.8499ZM98.3448 47.528V43.448H94.1208V35.192H89.8968V16.376H95.9928V32.744H100.217V41H102.617V32.744H106.841V16.376H112.985V35.192H108.713V43.448H104.489V47.528H98.3448ZM121.121 47.528V43.448H116.897V28.712H121.121V24.584H135.713V28.712H139.985V35.192H133.841V31.112H122.993V32.744H131.489V39.32H122.993V41H133.841V36.824H139.985V43.4H135.713V47.528H121.121ZM150.043 47.528V43.448H145.819V28.712H150.043V24.584H164.635V28.712H168.907V35.192H162.763V31.112H151.915V41H162.763V36.872H168.907V43.448H164.635V47.528H150.043ZM180.798 47.528V43.448H176.574V31.112H172.35V24.584H176.574V16.376H182.67V24.584H195.438V31.112H182.67V41H193.566V36.872H199.71V43.448H195.438V47.528H180.798ZM208.355 47.528V43.448H204.131V28.712H208.355V24.584H222.947V28.712H227.219V43.448H222.947V47.528H208.355ZM210.227 41H221.075V31.112H210.227V41ZM233.053 47.528V28.712H237.277V24.584H251.869V28.712H256.141V35.192H249.997V31.112H239.149V47.528H233.053Z' />
              </svg>
            </Link>

            <button
              className='md:hidden flex'
              onClick={() => setSidebarOpen(false)}
            >
              <X />
            </button>
          </figure>
          {/* <GitHubButton /> */}

          <ScrollArea className='h-[95%] py-4 pb-12'>
            <ul className='pb-3'>
              {basePath?.map((link, index) => {
                return (
                  <>
                    <li key={`id-${index}`}>
                      <Link
                        href={link.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex gap-2 group font-medium items-center py-1  transition-all ${
                          link.href === pathname
                            ? 'active-nav'
                            : 'text-slate-600 hover:text-slate-900  dark:text-slate-400 dark:hover:text-white'
                        }`}
                      >
                        {React.cloneElement(link?.icon, {
                          className: `${
                            link.href === pathname
                              ? 'dark:text-base-dark dark:bg-white bg-base-dark text-white'
                              : 'dark:bg-gray-800 dark:text-white group-hover:bg-base-dark group-hover:text-white  dark:group-hover:bg-white dark:group-hover:text-base-dark'
                          } h-7 w-7 border transition-all  rounded-sm p-1.5`,
                        })}

                        {link.name}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
            <h1 className='text-sm font-semibold pb-1'>Components</h1>
            <ul>
              {[...MainComponents, ...SpecialComponents]?.map((link) => {
                return (
                  <>
                    <li>
                      <Link
                        href={link.href}
                        className={`font-normal    dark:hover:text-white  py-1 pl-2  border-l transition-all   ${
                          link.href === pathname
                            ? 'dark:border-white border-black text-black dark:text-white font-medium'
                            : 'dark:text-slate-400 hover:border-black/60 dark:hover:border-white/50 text-slate-500 hover:text-slate-900'
                        }`}
                        // data-active={link.id === pathname}
                        key={link.href}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </ScrollArea>
        </DrawerContent>
      </SidebarDrawer>
    </>
  );
}

export default MobileHeader;
