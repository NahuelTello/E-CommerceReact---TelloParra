import React, { useContext} from 'react'
import './NavBar.css'
import { AppBar, Container, Toolbar} from '@mui/material'
import { Link } from "react-router-dom";

import MenuBrand from '../MenuBrand/MenuBrand';
import CartWidget from '../CartWidget/CartWidget';
import { ProductsContext } from '../../context/ProductsContext';


const NavBar = () => {
  const [items]  = useContext(ProductsContext)

  // Utilizando reduce para sumar todos los elementos del arreglo
  const sumaTotal = items.reduce((acumulador, elemento) => {
    return acumulador + elemento.quantity;
  }, 0);


  return (
    <AppBar position="static" className="ResponsiveNavigation" sx={{ background:'#2A2A2A;'}}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters className="ResponsiveNavigationContainer">
          <Link to='/' className='items'>
            Inicio
          </Link>
          <MenuBrand />
          <Link to='/about' className='items'>
            Nosotros
          </Link>
          <Link to='/contact' className='items'>
            Contacto
          </Link>
          <Link to='/shop' className='items'>
            <div className='CartComponent'>
              <CartWidget />
              {/* condición ? expresiónSiVerdadera : expresiónSiFalsa */}
              {sumaTotal === 0 ? null : sumaTotal } 
            </div>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar