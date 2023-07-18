import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'


const ShopDetail = ({items}) => {
   
  return (
    <div>
      ShopDetail 
      <Card>
        <CardContent>
          <Typography>
            {items.product.name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default ShopDetail