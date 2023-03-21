import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { MENU_ITEMS } from 'src/constant';
import type { IProps } from 'src/types';

const MobileScreen: React.FC<IProps> = ({ navbarOpen, setNavbarOpen }) => {
  const router = useRouter();
  return (
    <div className={'fixed top-0 m-0 h-screen w-full bg-white lg:hidden'}>
      <ul
        className={`bottom-0 mt-[76px] h-screen translate-y-0 list-none flex-col transition duration-500 ${
          navbarOpen ? 'left-0' : 'left-[-100%]'
        }`}
      >
        {MENU_ITEMS.map((item, ind) => {
          return (
            <>
              <Link href={item.id}>
                <div onClick={() => setNavbarOpen(false)}>
                  <li
                    className={`active:text-primary mx-auto flex cursor-pointer divide-y border-b-2 border-solid p-5 ${
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
    </div>
  );
};

export default MobileScreen;
