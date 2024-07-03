import React from 'react';
import {Link} from 'react-router-dom';
import Cart from './Cart';

function Payment(){


    return(
        <>
         <div class="payment  grid grid-cols-3 gap-3 p-2 ">

        <div class="h-full rounded-lg  col-span-2 p-2 flex flex-col items-center">
            
            <h2 className='text-3xl font-bold text-gray-800 mb-20'>Payment</h2>

            <div className="options flex items-center gap-5 mb-4">
                <div class="flex items-center">
                    <input id="default-radio-1" checked="checked" type="radio" value="card" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 focus:ring-2 focus:ring-offset-0"/>
                    <label for="default-radio-1" class="ms-2 text-xl font-medium text-gray-600">Card Payment</label>
                </div>
                <div class="flex items-center">
                    <input checked id="default-radio-2" type="radio" value="cash" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 focus:ring-2 focus:ring-offset-0"/>
                    <label for="default-radio-2" class="ms-2 text-xl font-medium text-gray-600">Cash-on Delivery</label>
                </div>
            </div>


            

                <div class="bg-gray-200 px-8 py-8 h-3/5 rounded-xl w-6/12">
                <div class="space-y-4">
                    <div>
                    <label for="email" class="block mb-1 text-gray-600 font-semibold"> Card Number</label>
                    <input type="text" class="bg-gray-50 px-4 py-2 outline-none rounded-md w-full" />
                    </div>
                    <div>
                    <label for="email" class="block mb-1 text-gray-600 font-semibold">Card's Expiry Date</label>
                    <input type="text" class="bg-gray-50 px-4 py-2 outline-none rounded-md w-full" />
                    </div>
                    <div>
                    <label for="email" class="block mb-1 text-gray-600 font-semibold">CVC Number</label>
                    <input type="text" class="bg-gray-50 px-4 py-2 outline-none rounded-md w-full" />
                    </div>
                </div>
                <button class="mt-4 w-full bg-orange-500
                text-gray-100 py-2 rounded-md text-lg hover:bg-gray-400 ">Confirm Payment</button>
                </div>

        </div>

            <div class="h-fit rounded-lg bg-gray-300 p-2 flex flex-col items-center relative">
                
                 <Cart/>
                <Link to="/" className=" mt-3 w-full flex justify-center bg-orange-500 p-2 rounded-md transition hover:bg-gray-400">
                        <p  className=' text-lg text-gray-200  
                        '>Back To Shopping</p>
                </Link> 
            </div>

        </div>
        </>
    )
}

export default Payment 