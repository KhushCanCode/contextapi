import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/trainers.png';


function Header() {

  return (
    <>
     <header className="bg-slate-800">

  <div class="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 ">
    
   <div className="logo h-12 w-12 ">
    <img src={logo} alt="..." className='h-full w-full'/>
   </div>
   
    <div class="flex flex-1 items-center justify-between">

      <nav className='navbar'>

        <ul class="flex items-center gap-6 text-xl">
          <li>
            <a class="text-gray-500 transition hover:text-orange-500" href="#"> New  </a>
          </li>
          <li>
            <a class="text-gray-500 transition hover:text-orange-500" href="#"> Men </a>
          </li>
          <li>
            <a class="text-gray-500 transition hover:text-orange-500" href="#"> Women </a>
          </li>
          <li>
            <a class="text-gray-500 transition hover:text-orange-500" href="#"> Classy </a>
          </li>
          <li>
            <a class="text-gray-500 transition hover:text-orange-500" href="#"> Trendy </a>
          </li>
          <li>
            <a class="text-gray-500 transition hover:text-orange-500" href="#"> Sports </a>
          </li>

        </ul>
      </nav>

      <div class="flex items-center gap-7">
       <Link to="/payment">
       <i className="fa-solid fa-cart-shopping text-2xl text-gray-300 hover:text-orange-500"></i>
       </Link>
       <a href="#">
       <i className="fa-solid fa-user text-2xl text-gray-300 hover:text-orange-500 "></i>
       </a>

      </div>

    </div>


  </div>
</header>
    </>
  )
}

export default Header
