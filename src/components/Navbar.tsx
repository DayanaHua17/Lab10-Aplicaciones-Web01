'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre Nosotros' },
  { href: '/products', label: 'Productos' },
  { href: '/client', label: 'Clientes' },
  { href: '/contact', label: 'Contáctanos' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">MiEmpresa</h1>
        <ul className="flex space-x-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative transition duration-300 ease-in-out
                    ${isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-300'}
                    after:content-[''] after:block after:h-[2px] after:bg-blue-400 after:scale-x-0
                    hover:after:scale-x-100 after:transition-transform after:origin-left
                    ${isActive ? 'after:scale-x-100' : ''}
                  `}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
