import React from 'react';
import {Link} from 'react-router-dom';
import useCart from '../store/CartContext';
import Cart from './Cart';

function Shop(){

  const {shoeList, addToCart } = useCart();
  

    return(
        <>
        <div class="shop grid grid-cols-3 gap-3 h-auto  mt-2">

            <div class="h-full rounded-lg  col-span-2 p-1 grid grid-cols-3 gap-3">

            {shoeList.map(shoe => (
                <div className="card w-80 bg-slate-800 rounded-xl p-3 relative" key={shoe.id}>

                    <div className="image h-72 w-full">
                        <img src={shoe.img} alt="" className='h-full w-full rounded-xl' />
                    </div>
                    
                    <div className="content flex justify-between items-center">
                        <h3 class="mt-2 font-bold text-gray-100 text-xl">{shoe.name}</h3>
                        <h3 class="mt-2 font-bold text-orange-500 text-xl">${shoe.price}</h3>
                    </div>
                    <div className="btn mt-2 w-full">
                    <button onClick={() => addToCart(shoe, shoe.id)} className=' text-lg text-gray-200  bg-orange-500 p-1
                     w-full rounded-md transition hover:bg-gray-400'>Add To Cart</button>
                    </div>

                </div>
                ))}

                
            </div>

            <div class="h-fit rounded-lg bg-gray-300 p-2 flex flex-col items-center relative">
              <Cart/>
            <Link to="/payment" className=" mt-3 w-full flex justify-center bg-orange-500 p-2 rounded-md transition hover:bg-gray-400">
                    <p  className=' text-lg text-gray-200'>Proceed To Payment</p>
            </Link>
          </div>
        </div>
        </>
    )
}

export default Shop