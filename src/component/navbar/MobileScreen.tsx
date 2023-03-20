/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { MENU_ITEMS } from '@/constant';

interface IProps {
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
}

const MobileScreen: React.FC<IProps> = ({ navbarOpen, setNavbarOpen }) => {
  const router = useRouter();
  return (
    <>
      {/* <div
       className={`duration-400 fixed top-16 m-0 h-screen w-full bg-white transition-all lg:hidden`}
     > */}

      <ul
        className={`fixed bottom-0 top-16 h-screen w-full list-none flex-col justify-center  ${
          navbarOpen ? 'left-0' : 'left-[-100%]'
        }`}
      >
        {MENU_ITEMS.map((item, ind) => {
          return (
            <>
              <Link href={item.id}>
                <div onClick={() => setNavbarOpen(false)}>
                  <li
                    className={`mx-auto flex cursor-pointer divide-y border-b-2 border-solid p-5 active:text-green-700 ${
                      router.pathname === item.id
                        ? 'text-green-700'
                        : 'text-black'
                    }`}
                    key={ind}
                  >
                    {item.label}
                  </li>
                </div>
              </Link>
            </>
          );
        })}
      </ul>
      {/* </div> */}
    </>
  );
};

export default MobileScreen;
