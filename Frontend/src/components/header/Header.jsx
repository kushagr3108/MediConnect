import React, {useEffect, useRef} from 'react'
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import {NavLink, Link} from "react-router-dom";


const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Doctors'
  },
  {
    path: '/services',
    display: 'Services' 
  },
  {
    path: '/contact',
    display: 'Contact'
  }
]

const Header = () => {
  return (
    <header className='header flex item-center'>
      <div className='container'>
        <div className='flex item-center justify-between'>
          <div>
            <img src={logo} alt="" />
          </div>

          <div className='navigation'>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {
                navLinks.map((link,index)=> <li key={index}>
                  <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>{link.display}</NavLink>
                </li>)
              }
            </ul>
          </div>
          <div className='flex items-center gap-4'>
            <div>
              <Link to='/'>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={userImg} className='w-full rounded-full' alt=""/>
                </figure>
              </Link>
            </div>
            <Link to='/login'>
              <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
            </Link>

            {/* <span className='md:hidden'>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header