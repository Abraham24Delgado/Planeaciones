"use client"
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
//import AcmeLogo from '@/app/ui/acme-logo';
import { AcademicCapIcon, PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 ">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-white dark:bg-gray-900 p-4 md:h-40"
        href="/dashboard"
      >
        <div className="w-32 text-white md:w-40 ">
          {/* <AcmeLogo /> */}
          < AcademicCapIcon className='w-20 text-black dark:text-white'/>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-white md:block dark:bg-gray-900"></div>
        <form onClick={async (e) => {
            e.preventDefault();
            'use client';
            await signOut();
          }}>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-700 dark:hover:text-white dark:bg-blue-950 dark:text-white  md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Cerrar Sesion</div>
          </button>
        </form>
      </div>
    </div>
  );
}