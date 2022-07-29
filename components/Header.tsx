import {BellIcon, SearchIcon} from '@heroicons/react/solid'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {

  const [isScrolled,setIsScrolled] = useState(false)

  useEffect(()=>{
    const handelScroll = () =>{
      if(window.scrollY > 0 ){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handelScroll)
    return () =>{
      window.removeEventListener('scroll', handelScroll)
    }
  },[])

  return (
    <header className={ `${isScrolled && 'bg-[#141414] ' }` } >
      <div className="flex items-center space-x-2 md:space-x-10 ">
        <img
          src="https://i.ibb.co/5KH9K3G/netflix.png"
          width={150}
          height={150}
          alt=""
          className=" cursor-pointer object-contain "
        />
        <ul className=" hidden space-x-4 md:flex ">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Populer</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className=' flex space-x-4 items-center text-sm font-light ' >
        <SearchIcon className=' hidden sm:inline h-6 w-6 ' />
        <p className='hidden lg:inline ' >Kids</p>
        <BellIcon className='h-6 w-6' />
        <Link href='/account' >
          <img
              src="https://rb.gy/g1pwyx"
              alt=""
              className="cursor-pointer rounded"
            />
        </Link>
      </div>
    </header>
  );
};

export default Header;
