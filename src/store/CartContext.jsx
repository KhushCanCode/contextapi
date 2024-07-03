import { createContext, useContext, useState } from "react";

import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpeg';


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