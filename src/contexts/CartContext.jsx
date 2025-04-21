import { createContext, useContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage';


export const CartContext = createContext()

export const useCart = () => useContext(CartContext);


export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useLocalStorage('s11d1', []);

    const addItem = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )

}