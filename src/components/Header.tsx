import React from 'react';
import Link from 'next/link'; // <-- 1. IMPORT LINK
import ConnectButton from './ConnectButton';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          {/* Site Title */}
          <Link href="/" className="text-xl font-bold">
            Gono Moncho
          </Link>
          {/* Navigation Link to Publish Page */}
          <Link href="/publish" className="text-sm font-medium text-gray-300 hover:text-white">
            Publish
          </Link>
        </div>
        
        <ConnectButton />
        
      </div>
    </header>
  );
}