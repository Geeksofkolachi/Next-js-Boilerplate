/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable tailwindcss/no-custom-classname */
// import Link from 'next/link';
import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
import { FaMixer, FaStream } from 'react-icons/fa';

// import { style } from './Style';
// import { Link } from "react-scroll";
// import Button from '../button/Button';
// import NavLinks from '../NavbarNew/NavLinks';
import Navlinks from './Navlinks';

const MENU_ITEMS = [
  { id: '/', label: 'Home' },
  {
    id: 'News',
    label: 'News',
    submenu: true,
    // menuItems: [
    //   {
    //     name: 'about-us',
    //     label: 'About Us',
    //   },
    //   {
    //     name: 'contact-us',
    //     label: 'contact Us',
    //   },
    // ],
  },
  { id: '/login', label: 'About Us' },
  { id: '/Contact', label: 'Contact Us' },
  { id: 'Blogs', label: 'Blogs' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  // const [subNav, setSubNav] = React.useState(false);

  // const navigate = useNavigate();
  // const login = () => {
  //   setNavbarOpen(false);
  //   navigate('/Login');
  // };

  return (
    <>
      <nav
        className={` border-primary-zinc fixed inset-x-0 top-0 z-30 mx-auto flex border-b
         p-2 px-4 shadow-xl backdrop-blur-md  lg:justify-between  lg:px-10 ${
           navbarOpen ? 'justify-between ' : 'flex justify-between '
         }`}
      >
        {/* <!-- Logo --> */}
        <div>
          <h3 className="text-primary-zinc flex items-center px-1 font-sans text-lg font-semibold">
            Joshua Tree
          </h3>
          <h3 className="text-primary-zinc -mt-3 flex items-center font-sans text-2xl font-bold ">
            Academy
          </h3>
        </div>
        {/* <!-- Links Section --> */}

        {/* <div className="flex">
        
        </div> */}

        {/* <!-- Login --> */}
        <div className="flex items-center gap-1 lg:gap-8">
          <ul className="active:text-red hidden items-center space-x-12 lg:flex ">
            {/*  */}
            {/* <li>Home</li>
            <li>Feature</li>
            <li>About Us</li>
            <li>Contact US</li> */}
            <Navlinks />
          </ul>
          <button className="rounded-3xl bg-green-500 p-2 text-amber-50">
            Download App
          </button>

          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="cursor-pointer px-2 py-0  "
            >
              <FaMixer
                className="h-6 w-7 lg:hidden"
                style={{ transform: 'rotate(180deg)' }}
              />
            </button>
          ) : (
            ''
          )}

          <button
            className={`block  cursor-pointer rounded border border-solid border-transparent bg-transparent px-2 
              text-xl leading-none outline-none focus:outline-none  lg:hidden ${
                navbarOpen && 'hidden'
              }`}
            type="button"
            onClick={() => setNavbarOpen(true)}
          >
            {/* <text>open</text> */}
            <FaStream
              className="h-6 w-7 lg:hidden"
              style={{ transform: 'rotate(180deg)' }}
            />
          </button>
        </div>
      </nav>

      {/* mobile */}

      {navbarOpen ? (
        <>
          <div
            className={`
            " text-secondary-black " relative m-0  h-screen  w-full  bg-white/80 p-20    transition-all duration-1000 lg:hidden
            `}
          >
            <ul
              className={`bottom-0  translate-y-0 list-none flex-col justify-center   transition duration-500 ${
                navbarOpen ? 'left-0' : 'left-[-100%]'
              }`}
            >
              {MENU_ITEMS?.map((item, ind) => {
                return (
                  <>
                    <div
                      // to={item.id}
                      onClick={() => setNavbarOpen(false)}
                      // className={({ isActive }) =>
                      //   isActive
                      //     ? ' text-red ring-offset-8 decoration-2  decoration-primary-zinc underline-offset-8'
                      //     : undefined
                      // }
                    >
                      <li
                        className={`active:text-primary mx-auto  flex items-center justify-center divide-y border-b-2 border-solid p-5`}
                        key={ind}
                      >
                        {item.label}
                      </li>
                    </div>
                  </>
                );
              })}
            </ul>
          </div>
          {/* </div> */}
        </>
      ) : null}
    </>
  );
};
export default Navbar;
