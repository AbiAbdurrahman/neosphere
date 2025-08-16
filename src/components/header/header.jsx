'use client'

import Navigation from '@/components/navigation'
import Link from 'next/link';
import { useEffect, useState } from 'react'



const Header = () => {
  const [ flexiHeader, setFlexiHeader ] = useState(false);
  const [ dropdownOpen, setDropdownOpen ] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY > 200 || window.outerWidth <= 768) {
      setFlexiHeader(true)
    } else {
      setFlexiHeader(false)
    }
  }

  useEffect(() => {
    if (window.scrollY > 200 || window.outerWidth <= 768) setFlexiHeader(true)

    window.addEventListener('scroll', scrollHeader)
    window.addEventListener('resize', scrollHeader)

    return () => {
      window.removeEventListener('scroll', scrollHeader);
      window.addEventListener('resize', scrollHeader);
    };
  })

  return (
    <>
      <header
        style={styles.header}
        className='
          hidden
          md:flex
        '
      >
        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '1rem' }}>
          <img
            src="/ndm-logo.png"
            style={{ width: 200, height: 'auto', flexShrink: 0 }}
            alt="Logo"
          />
        </div>
        <nav style={styles.nav}>
          <Navigation flex_direction={`flex-row`} onClick={ () => setDropdownOpen(false) } />
        </nav>
      </header>
      <nav
        className={ `
          fixed
          top-10
          right-10
          z-30
          w-[50px] h-[50px]
          bg-[#7F1416]
          rounded-full
          py-1
          px-2
          transition-transform
          duration-500
          flex
          flex-col
          ${ flexiHeader ? 'translate-x-0' : 'translate-x-40' }
          gap-2
          justify-center
          items-center
          align-middle
          cursor-pointer
        `}
        onClick={() => setDropdownOpen(state => !state)}
      >
        {/* <button className="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button> */}
        {/* custom hamburger button */}
          <div className='h-1 w-full bg-white rounded-md'></div>
          <div className='h-1 w-full bg-white rounded-md'></div>
          <div className='h-1 w-full bg-white rounded-md'></div>
      </nav>
      <header
        className={`
          fixed
          top-0
          h-screen
          w-[250px]
          bg-[#7F1416]
          right-0
          z-50
          flex
          flex-col
          p-5
          transition-transform
          duration-500
          ${dropdownOpen ? 'translate-x-0' : 'translate-x-96'}
        `}
      >
        <div className='flex flex-row h-20 mb-10'>
          <div className="flex flex-row h-20">
            <span className='font-bold text-white cursor-pointer' onClick={ () => setDropdownOpen(false) }>X</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '1rem' }}>
            <img
              src="/ndm-logo.png"
              style={{ width: 200, height: 'auto', flexShrink: 0 }}
              alt="Logo"
            />
          </div>
        </div>
        <nav className="text-slate-100 mr-10 h-full">
          <Navigation flex_direction={`flex-col`} onClick={ () => setDropdownOpen(false) } />
        </nav>
      </header>
    </>
  );
};

const styles = {
  header: {
    backgroundColor: '#7F1416',
    padding: '1rem',
    color: '#fff',
    inset: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default Header;