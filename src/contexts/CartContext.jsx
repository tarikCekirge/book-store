import { createContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage';


export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useLocalStorage('s11d1', []);

    const addItem = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (item) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )

}