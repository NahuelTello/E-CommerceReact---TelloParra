import React from 'react'
import { CardMedia } from '@mui/material'
import cartWidget from '../../assets/img/cart.svg'
const CartWidget = () => {
  return (
    <div>
        <CardMedia
            component='img'
            image={cartWidget}
            title='cartWidget'
        />
    </div>
  )
}

export default CartWidget