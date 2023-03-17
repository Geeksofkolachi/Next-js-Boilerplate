import React from 'react';

// import { NavLink } from 'react-router-dom';
import { style } from './Style';

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
  { id: 'Contact', label: 'Contact Us' },
  { id: 'Blogs', label: 'Blogs' },
];

const Navlinks = () => {
  return (
    <>
      {MENU_ITEMS?.map((item, ind) => {
        return (
          <div className="group relative" key={ind}>
            {/* <NavLink
              to={item.id}
              key={ind}
              className={({ isActive }) =>
                isActive
                  ? 'underline ring-offset-8 decoration-2  decoration-primary-zinc underline-offset-8'
                  : undefined
              }
            > */}
            <li className={style.list}> {item.label}</li>
            {/* <div className="absolute mt-4 hidden flex-col  bg-white group-hover:block">
              {item?.menuItems?.map((items) => {
                return (
                  <>
                    <div className="w-40 px-3 py-1 ">
                      <li className="bottom-0  translate-y-0 text-sm   text-black transition duration-300 ">
                        {items.name}
                      </li>
                    </div>
                  </>
                );
              })}
            </div> */}
            {/* </NavLink> */}
            {/* {console.log(item.menuItems)} */}
          </div>
        );
      })}
    </>
  );
};

export default Navlinks;
