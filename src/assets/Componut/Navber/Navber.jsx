import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact"
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog"
  }
];




const Navber = () => {
  const[open,setopen]=useState(false);
  const links =    navigationData.map(route => <li className='lg:mr-10  hover:bg-amber-400'>
                        <a href="{route.path}">{route.name}</a>
                        </li> )

    return (
        <nav className='flex justify-between mx-5 mt-4'>
          <span className='flex ' onClick={() => setopen(!open)}>
            {
            open ? 
            <X className='md:hidden'></X> :  
            <Menu className='md:hidden'></Menu> 
            }
            <ul className={`md:hidden absolute duration-1000
              ${open ? 'top-8' : '-top-40'}
              bg-amber-200 `}>
              {
                links
              }
            </ul>
           
            <h3 className='ml-2'>My nav</h3>
          </span>


             <ul className='md:flex hidden'>
                {
                 links
                }
              </ul>








            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/">About</a></li>
                <li className='mr-10'><a href="/">Blogs</a></li>
            </ul> */}
            <button>Sign In</button>
        </nav>
    );
};

export default Navber;