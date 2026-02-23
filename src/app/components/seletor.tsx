"use client";

import Link from "next/link";
import { useState } from "react";

export default function Seletor() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800"
      >
        <span className="sr-only">Menu</span>
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className={`absolute bottom-16 right-0 w-48 rounded-md bg-white shadow-lg ${isOpen ? "block" : "hidden"}`}>
        <ul className="py-2">
          <li>
            <Link
              href="/?theme=black"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Tema Black
            </Link>
          </li>
          <li>
            <Link
              href="/?theme=creative"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Tema Creative
            </Link>
          </li>
          <li>
            <Link
              href="/?theme=white"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Tema White
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
