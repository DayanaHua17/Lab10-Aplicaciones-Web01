import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Next Routing Lab',
  description: 'Laboratorio de Enrutamiento en Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <Navbar /> {/* ✅ Agregamos el navbar aquí */}
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
