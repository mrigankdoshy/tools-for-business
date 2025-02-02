'use client';

import { Input } from '@/shared/ui/input';
import { SubscribeButton } from '@/shared/ui/subscribe-button';
import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { ReactNode } from 'react';

type FooterNavItem = Readonly<{
  href: string;
  name: string;
}>;

type FooterNavOption = Readonly<{
  label: string;
  items: FooterNavItem[];
}>;

type FooterSocial = Readonly<{
  href: string;
  name: string;
  icon: ReactNode;
}>;

const footerNavOptions: FooterNavOption[] = [
  {
    label: 'Product',
    items: [
      { href: '/', name: 'Home' },
      { href: '/tools', name: 'Tools' },
      { href: '/blog', name: 'Blog' },
    ],
  },
  {
    label: 'Community',
    items: [
      { href: '/newsletter', name: 'Newsletter' },
      { href: 'mailto:', name: 'Email' },
    ],
  },
  {
    label: 'Legal',
    items: [
      { href: '/terms', name: 'Terms' },
      { href: '/privacy', name: 'Privacy' },
    ],
  },
];

const footerSocials: FooterSocial[] = [
  {
    href: '',
    name: 'Instagram',
    icon: <InstagramLogoIcon className="size-4" />,
  },
  {
    href: '',
    name: 'Twitter',
    icon: <TwitterLogoIcon className="size-4" />,
  },
  {
    href: '',
    name: 'Email',
    icon: <EnvelopeClosedIcon className="size-4" />,
  },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
          <div className="mb-12 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Focal
              </span>
            </Link>
            <p className="max-w-xs">Tools for Business</p>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Enter your email"
                className="flex-grow basis-0"
              />
              <SubscribeButton />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
            {footerNavOptions.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
                  {nav.label}
                </h2>
                <ul className="grid gap-2">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
          <div className="flex space-x-5 sm:mt-0 sm:justify-center">
            {footerSocials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            Copyright © {new Date().getFullYear()}{' '}
            <Link href="/" className="cursor-pointer">
              Mrigank Doshy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
