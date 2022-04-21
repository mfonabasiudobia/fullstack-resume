import React from 'react'
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { nav } from "/constant/Nav";

const styles = {
    mobileNavLinks: `hover:bg-gray-200 py-4 px-6 w-full text-left`,
    mobileNavWrapper: `z-50 absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300`,
    mobileNavInnerWrapper: `flex flex-col items-center w-full text-base cursor-pointer  border-b`,
    hamburgerBtn : `block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-grey-200 group`,
    navWrapper :   `container mx-auto flex justify-between items-center py-4 relative `,
    pcNavWrapper : `hidden md:flex space-x-7`, 
}

const Header = () => {

 
	return (
  <nav  className="w-full sticky top-0 z-50 bg-gray-500 ">
   <div className={styles.navWrapper}>
          <img alt="" src="/images/logo.png" className="h-10 object-cover rounded-full" />

          <ul className={styles.pcNavWrapper}>
            {nav.map((item, index) =>  
            <li key={index}>
              <Link href={item.link}>
                <a className="text-blue-500 font-bold hover:text-blue-400">{item.name}</a>
              </Link>
            </li>)}
          </ul>

          <button className={styles.hamburgerBtn}>
              <GiHamburgerMenu size={20} />

              <div className={styles.mobileNavWrapper}>
                    <ul className={styles.mobileNavInnerWrapper}>

                      <li className="py-4 px-6 w-full text-left blue-2-bg text-[14px]">
                        <div><strong>MfonAbasi Udobia</strong></div>
                        <div>Fullstack Developer</div>
                      </li>

                      {nav.map((item, index) =>  
                        <li className={styles.mobileNavLinks} key={index}>
                          <Link href={item.link}><a className="text-blue-500 font-bold hover:text-blue-400">{item.name}</a></Link>
                        </li>
                      )}
                    </ul>
              </div>

          </button>
      </div>
    </nav>
      )
}

export default Header