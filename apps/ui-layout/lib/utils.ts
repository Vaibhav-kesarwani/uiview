import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function debounce(
  func: (...args: any[]) => any,
  wait: number,
  immediate: boolean = false
) {
  let timeout: number | undefined;

  return function executedFunction(this: any, ...args: any[]) {
    const context: any = this;

    const later = () => {
      timeout = undefined;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow: boolean = immediate && !timeout;

    clearTimeout(timeout);

    timeout = window.setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

export function throttle(fn: (...args: any[]) => any, wait: number) {
  let shouldWait = false;

  return function throttledFunction(this: any, ...args: any[]) {
    if (!shouldWait) {
      fn.apply(this, args);
      shouldWait = true;
      setTimeout(() => (shouldWait = false), wait);
    }
  };
}

export const siteConfig = {
  name: 'Vector UI',
  url: 'https://ui-layouts.com',
  ogImage: 'https://www.ui-layouts.com/og.jpg',
  description:
    'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
  links: {
    twitter: 'https://x.com/Vaibhav_k__',
    linkedin: 'https://www.linkedin.com/in/vaibhav-kesarwani-9b5b35252/',
    github: 'https://github.com/Vaibhav-kesarwani',
  },
};

export type SiteConfig = typeof siteConfig;
