import React, { createContext, useState } from 'react'

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [items, setItems] = useState([])
  return (
    <ProductsContext.Provider value={[items, setItems]} >
        {children}
    </ProductsContext.Provider>
  )
}
