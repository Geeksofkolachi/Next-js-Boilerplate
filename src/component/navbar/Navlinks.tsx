import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const MENU_ITEMS = [
  { id: '/', label: 'Home' },
  { id: '/AboutUs', label: 'About Us' },
  { id: '/Features', label: 'Feature' },
  { id: '/Blog', label: 'Blog' },
  { id: '/ContactUs', label: 'Contact Us' },
];

const Navlinks = () => {
  const router = useRouter();

  return (
    <>
      {MENU_ITEMS.map((item, ind) => {
        return (
          <div key={ind}>
            <Link href={item.id}>
              <li
                className={`flex cursor-pointer font-semibold transition duration-300 hover:scale-105 
                           hover:text-green-700 ${
                             router.pathname === item.id
                               ? 'text-green-700'
                               : 'text-black'
                           }`}
              >
                {item.label}
              </li>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Navlinks;
