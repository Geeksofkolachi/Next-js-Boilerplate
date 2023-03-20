/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable tailwindcss/no-custom-classname */

import React from 'react';
import { FaMixer, FaStream } from 'react-icons/fa';

// import Button from '@/component/Button';
import MobileScreen from '@/component/navbar/MobileScreen';
import Navlinks from '@/component/navbar/Navlinks';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [sticky, setSticky] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener('scroll', handleScroll);

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     setSticky(window.scrollY > 200);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  // console.log(sticky);
  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-30 mx-auto flex
         justify-between bg-gray-50 p-2 px-4 shadow-md backdrop-blur-md transition-all duration-500 ease-in lg:px-10 
         ${sticky ? '-top-2' : 'top-0'}`}
      >
        <div>
          <h3 className="text-primary-zinc flex items-center px-1 font-sans text-lg font-semibold">
            Joshua Tree
          </h3>
          <h3 className="text-primary-zinc -mt-3 flex items-center font-sans text-2xl font-bold ">
            Academy
          </h3>
        </div>

        <div className="flex items-center gap-4 lg:gap-14">
          <ul className="active:text-red hidden items-center space-x-12 lg:flex">
            <Navlinks />
          </ul>
          {/* <Button btnText="Download App" /> */}
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
