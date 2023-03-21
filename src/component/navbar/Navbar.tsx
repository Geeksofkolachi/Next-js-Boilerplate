/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable tailwindcss/no-custom-classname */

import Image from 'next/image';
import React from 'react';
import { FaMixer, FaStream } from 'react-icons/fa';

import Button from '@/component/Button';
import MobileScreen from '@/component/Navbar/MobileScreen';
import Navlinks from '@/component/Navbar/Navlinks';
import Logo from '@/public/assets/Logo/Logo.png';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav
        className={
          'fixed inset-x-0 top-0 z-30 mx-auto flex items-center justify-between bg-white  p-4 backdrop-blur-md lg:justify-around'
        }
      >
        <div className="w-36 items-center lg:w-44">
          <Image src={Logo} alt="image" />
        </div>
        <div className="flex items-center ">
          <ul className="hidden items-center space-x-8 lg:flex">
            <Navlinks />
          </ul>
          <Button btnText="Download App" btnStyle="lg:ml-6 mr-4" />
          <div className="cursor-pointer">
            {navbarOpen ? (
              <FaMixer
                onClick={() => setNavbarOpen(false)}
                className="h-6 w-6 lg:hidden"
                style={{ transform: 'rotate(180deg)' }}
              />
            ) : (
              <FaStream
                onClick={() => setNavbarOpen(true)}
                className={`h-6 w-6 lg:hidden  ${navbarOpen && 'hidden'}`}
                style={{ transform: 'rotate(180deg)' }}
              />
            )}
          </div>
        </div>
      </nav>

      {navbarOpen ? (
        <MobileScreen navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      ) : null}
    </>
  );
};
export default Navbar;
