import React, { useState } from 'react';
import { MdDoubleArrow } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <>
      {isNavbarVisible ? (
        <div className='grid grid-cols-6 grid-rows-1 gap-3 bg-blue-50 w-full h-48 p-2 justify-center text-blue-300'>
          <div className='flex-col h-[179px] w-[200px]'>
            <div className='flex mt-1'>
              <RxCross1 className='h-5 w-5 mt-2' onClick={toggleNavbar} />
              <img src="https://static.jsbin.com/images/dave.min.svg" alt="logo" className='h-24 w-24' />
            </div>
            <button className='border-2 border-blue-300 h-10 w-32'>New bin</button>
          </div>

          <div className='h-[179px] w-[200px]'>
            <div className='font-semibold text-sm grid text-blue-500'>JS Bin Feature <MdDoubleArrow /></div>
            <div> <Link to={'/gettingStarted'}>  Getting Started</Link> </div> 
            <div>Keyboard Shortcut</div>
            <div>Importing/exporting Gist</div>
            <div>Text area editor</div>
          </div>

          <div className='h-[179px] w-[200px]'>
            <div className='font-semibold text-sm text-blue-500'>Pro feature <MdDoubleArrow /></div>
            <div>Private bin</div>
            <div>Vanity URLs</div>
            <div>Upgrade To Pro Now</div>
          </div>

          <div className='h-[179px] w-[200px] flex flex-wrap'>
            <div>
              <div className='font-semibold text-sm text-blue-500 flex flex-wrap'>Blogs <MdDoubleArrow /></div><br />
              <div>The Return and The Refractor</div>
            </div>

            <div className='h-[179px] w-[200px]'>
              <div className='font-semibold text-sm text-blue-500 flex flex-wrap content-center'>Help <MdDoubleArrow /></div><br />
              <div>Local Js Bin:</div>
              <div>How to Link Multiple Bin</div>
            </div>
          </div>

          <div>
            <div className='font-semibold text-sm text-blue-500'>Donate to js Bin ❤️ <MdDoubleArrow /></div><br />
            <div>Support</div>
            <div>Follow</div>
            <div>Terms</div>
          </div>

          <div className='h-[179px] w-[200px] text-wrap text-black'>
            <div>“Everyone should learn how to program a computer because it teaches you how to think”</div>
            <div className='text-gray-500'>- Steve Jobs</div>
          </div>
        </div>
      ) : (
        // Button to unhide the navbar when it's hidden
        <button 
          onClick={toggleNavbar} 
        >
         <img src="https://static.jsbin.com/images/dave.min.svg" alt="" />
        </button>
      )}
    </>
  );
};

export default Header;
