import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='navbar-container flex items-center justify-between py-2 px-4 sm:px-20 font-medium'>
        <img src={assets.logo} alt="logo" className='w-24 sm:w-30 h-11 overflow-hidden' />
        <ul className='nav-links-desktop hidden sm:flex gap-5 text-black text-lg'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 h-[1.5px] border-none bg-black rounded-full hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 h-[1.5px] border-none bg-black rounded-full hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 h-[1.5px] border-none bg-black rounded-full hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 h-[1.5px] border-none bg-black rounded-full hidden' />
        </NavLink>
        </ul>

        <div className='nav-icons-container flex items-center gap-4 sm:gap-6'>
            <img src={assets.search_icon} alt="search" className='w-5 h-5 cursor-pointer' />

            <div className='nav-profile-group group relative'>
                <img className='w-5 h-5 cursor-pointer' src={assets.profile_icon} alt="profile" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} alt="cart" className='w-5 h-5 cursor-pointer' />
                <p className='absolute -top-2 -right-2 w-4 h-4 rounded-full bg-black text-white text-xs flex items-center justify-center'>3</p>
            </Link>
            <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu" className='w-5 h-5 cursor-pointer sm:hidden' />

        </div>

        <div className={`nav-mobile-sidebar absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar