import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState('');

    const addToCart = (item) => {
        setCart([...cart, item]);
        setMessage('Item added to cart successfully!');
        setTimeout(() => setMessage(''), 3000); // Clear the message after 3 seconds
    };

    const cartCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0); // Assuming each item has a 'quantity' property
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, message, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
