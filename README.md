# Context API

In this project, i have made a Cart that is gloabally available to Shop page and Payment page.
This is done using Context API.

## Netifly Link

https://task24-contextapi.netlify.app/

First of all i had my Shop component where i had all the shoe item display and also the cart.
I Made my Pyament component where payment information is asked. 

Now i wanted Shop and Payment to share the same cart so whatever changes happens in the Cart while on the Shop these changes must be propagated to Cart in the Payment component.

For this reason i made a store folder where i created CartContext.jsx file. Here i imported createContext and useContext.

        import { createContext, useContext, useState } from "react";

I needed to have shoeList globally and then a cart and some functions to modify the cart.

## CartContext.jsx

        export const CartContext = createContext();

        export const CartProvider = ({children}) => {
            const shoeList = [
                { id: 1, img: img1, name: 'Adidas Court80s Men Casual Sneakers', price: 620, quantity: 1 },
                { id: 2, img: img2, name: "New Balance 574 Legacy 'Angora Crimson' ", price: 670, quantity: 1 },
                { id: 3, img: img3, name: "Red Tape Men's Rover Comfortable Clogs", price: 890, quantity: 1 },
                { id: 4, img: img4, name: 'Centrino 7956 Classic Derby Formal Shoes', price: 799, quantity: 1 },
                { id: 5, img: img5, name: "Men's Italian Leather Dress Shoes", price: 950, quantity: 1 },
                { id: 6, img: img6, name: "ASIAN Men's TARZAN-04 Casual Sneaker Shoes", price: 320, quantity: 1 },
                { id: 7, img: img7, name: "Classic Oxford Leather Shoes", price: 750, quantity: 1 },
                { id: 8, img: img8, name: "Reebok Men Zig Kinetica 2 5 Edge Running Shoes ", price: 750, quantity: 1 }
            ];

            
            const [cart, setCart] = useState([]);
            const [total, setTotal] = useState(0);

            const addToCart = (shoeitem) => {

                const isItemInCart = cart.some(item => item.id === shoeitem.id);

                if (!isItemInCart) {
                setCart([...cart, shoeitem]);
                setTotal(total + shoeitem.price); 
                }
                else {
                console.log('Item is already in the cart');
                }
            };
            
            const increaseQuantity = (shoeitem, id) => {
                const updatedCart = cart.map(shoe => shoe.id === id ? 
                                    { ...shoe, quantity: shoe.quantity + 1 } 
                                    : shoe );
                setCart(updatedCart);
                setTotal(total + shoeitem.price);
            };
            
            const decreaseQuantity = (shoeitem, id) => {
                const updatedCart =  cart.map(shoe => shoe.id === id ? 
                                    {...shoe,  quantity : shoe.quantity > 0 ? shoe.quantity - 1 : 0} 
                                    : shoe)
                                    .filter(shoe => shoe.quantity > 0);
                setCart(updatedCart);
                setTotal(total - shoeitem.price);
            };

            return (
                <CartContext.Provider value={{ shoeList, cart, total, addToCart, increaseQuantity, decreaseQuantity }}>
                {children}
                </CartContext.Provider>
            );
        }

        export default function useCart(){
            return useContext(CartContext)
        }

addtoCart, increaseQuantity and decreaseQuantity functions are all defined here.

I imported all the images too in this file only.

Then I provided the CartContext to all the components that might need it in the App file.


## App.jsx

import './App.css'
import { CartProvider } from './store/CartContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header.jsx'
import Shop from './components/Shop.jsx'
import Payment from './components/Payment.jsx'

        function App() {

        return (
            <CartProvider>
            <Router>
            <Header/>
            <Routes>
                <Route path="/" element = {<Shop/>}/>
                <Route path="/payment" element = {<Payment/>}/>
            </Routes>
            </Router>
            </CartProvider>
        )
        }

        export default App

Then lastly this cart context needed to be consumed in both Shop And Payment. But I made a separate Cart component because i didnt want to repeat code in Shop and Payment.

## Cart.jsx

        import React from "react";
        import useCart from "../store/CartContext";

        function Cart(){

            const { cart, total, increaseQuantity, decreaseQuantity} = useCart();

            return(
                <>
                
                    <h2 className='text-3xl font-bold text-gray-800 mb-2'>Cart</h2>

                    {cart.map((shoe) => (

                    <div className="items  w-full flex items-center gap-4
                    p-2 border-b-2 border-gray-400 "  key={shoe.id}>

                    <div className="itemimg h-20 w-20">
                        <img src={shoe.img} alt="..." className='h-full w-full rounded-lg'/>
                    </div>
                    <div className="itemdetail w-2/3">
                        <h2 className='font-bold'>{shoe.name}</h2>
                        <p>${shoe.price}</p>
                    </div>
                    <div className="itemcounter flex flex-col items-center justify-center ">
                        <button className='bg-slate-700 px-2 pb-1 rounded-sm hover:bg-orange-500 text-gray-100' 
                        onClick={() => increaseQuantity(shoe, shoe.id)}>+</button>
                        <p>{shoe.quantity}</p>
                        <button className='bg-slate-700 px-2 rounded-sm hover:bg-orange-500 text-gray-100' 
                        onClick={() => decreaseQuantity(shoe, shoe.id)}>-</button>
                    
                    </div>
                    
                    </div>
                ))}

                    <div className="details  flex justify-between items-center px-3 mt-2 font-bold text-xl rounded-xl h-12 w-full">
                            <h2>Total</h2>
                            <h2 id='total'>${total}</h2>
                    </div>
                
                
                </>
            )
        }

        export default Cart;

And then used this Cart compomemt in both Shop and Payment.

        <div class="h-fit rounded-lg bg-gray-300 p-2 flex flex-col items-center relative">
                    <Cart/>
                    <Link to="/payment" className=" mt-3 w-full flex justify-center bg-orange-500 p-2 rounded-md transition hover:bg-gray-400">
                            <p  className=' text-lg text-gray-200'>Proceed To Payment</p>
                    </Link>
        </div>

And then i just used -

     const {shoeList, addToCart } = useCart();
      const { cart, total, increaseQuantity, decreaseQuantity} = useCart();

      for using the context.

