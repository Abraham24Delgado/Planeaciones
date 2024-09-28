'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  FolderOpenIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Inicio', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Planeaciones',
    href: '/dashboard/planeaciones',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Colaboradores', href: '/dashboard/colaboradores', icon: UserGroupIcon },
  {name: 'Recursos', href: '/dashboard/recursos', icon: FolderOpenIcon}
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm 
              font-medium hover:bg-blue-200  dark:text-white dark:hover:bg-blue-700 md:flex-none md:justify-start md:p-2 md:px-3"
                ${pathname === link.href ? 'bg-blue-200 dark:bg-blue-700 ring-2 ring-blue-200 dark:ring-blue-700  ' : 'bg-white dark:bg-blue-950'}
              `}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
