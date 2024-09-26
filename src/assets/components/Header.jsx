import React, { useState } from 'react'; 
import { MdDoubleArrow } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = ({ onNewBinClick }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <>
      {isNavbarVisible ? (
        <div className='grid grid-cols-1 md:grid-cols-6 gap-3 bg-blue-50 w-full p-2 text-blue-300 dark:bg-gray-800'>
          <div className='flex flex-col h-full items-center'>
            <div className='flex items-center mb-2'>
              <RxCross1 className='h-5 w-5 cursor-pointer' onClick={toggleNavbar} />
              <img src="https://static.jsbin.com/images/dave.min.svg" alt="logo" className='h-24 w-24 mx-2' />
            </div>
            <button className='border-2 border-blue-300 h-10 w-32 hover:bg-gray-500 dark:hover:bg-white dark:hover:text-blue-950' onClick={onNewBinClick}>New bin</button>
          </div>

          <div className='flex flex-col items-start h-full'>
            <div className='font-semibold text-sm text-blue-500 flex items-center'>JS Bin Feature <MdDoubleArrow /></div>
            <Link to={'/gettingStarted'} className='hover:underline'>Getting Started</Link>
            <div>Keyboard Shortcut</div>
            <div>Importing/exporting Gist</div>
            <div>Text area editor</div>
          </div>

          <div className='flex flex-col items-start h-full'>
            <div className='font-semibold text-sm text-blue-500 flex items-center'>Pro feature <MdDoubleArrow /></div>
            <div>Private bin</div>
            <div>Vanity URLs</div>
            <div>Upgrade To Pro Now</div>
          </div>

          <div className='flex flex-col items-start h-full'>
            <div className='font-semibold text-sm text-blue-500 flex items-center'>Blogs <MdDoubleArrow /></div>
            <div>The Return and The Refractor</div>
            <div className='font-semibold text-sm text-blue-500 flex items-center'>Help <MdDoubleArrow /></div>
            <div>Local Js Bin:</div>
            <div>How to Link Multiple Bin</div>
          </div>

          <div className='flex flex-col items-start h-full'>
            <div className='font-semibold text-sm text-blue-500 flex items-center'>Donate to js Bin ❤️ <MdDoubleArrow /></div>
            <div>Support</div>
            <div>Follow</div>
            <div>Terms</div>
          </div>

          <div className='flex flex-col items-start h-full text-black dark:text-white'>
            <div>“Everyone should learn how to program a computer because it teaches you how to think”</div>
            <div className='text-gray-500'>- Steve Jobs</div>
            <button className='border-blue-700 text-blue-950 rounded-md border-2 h-8 w-full mt-2 dark:text-blue-300 dark:border-white'>
              <Link to={"/login"}>Login</Link>
            </button>
          </div>
        </div>
      ) : (
        <button onClick={toggleNavbar} className='bg-blue-200 text-blue-900 font-bold text-base w-full  '>
          Back
        </button>
      )}
    </>
  );
};

export default Header;
