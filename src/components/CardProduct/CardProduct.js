import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
/* import AddWidget from '../AddWidget/AddWidget'; */



import "./CardProduct.css"
import { Button, /* CardActionArea, */ CardActions } from '@mui/material';

const CardProduct = ({product}) => {
  const precioCuota = product.price / 3;
  const resultFormat = precioCuota.toFixed(2).toString()
  return (
    <Card sx={{
      height: '550px',
      width: '300px',
      background: '#2A2A2A',
      borderRadius: '30px',
      justifyContent: 'space-between',
      flexDirection: 'column',
      display: 'flex'
    }}>
        
      <CardMedia
        component="img"
        image={product.img}
        title={product.id}
        sx={{
          width: '250px',
          height: '250px',
          borderRadius: '30px',
          margin: 'auto',
          marginTop: '20px'
        }}
      />

      <CardContent>

        <Typography variant="h5" sx={{
          display: 'flex',
          margin: 'auto',
          width: '260px',
          height: '30px',
          flexDirection: 'column',
          color: '#FFF',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '600',
          fontFamily: 'Monserrat',
          textAlign: 'center'
        }}>
          {product.name}
        </Typography>

        <Typography variant="body2" sx={{
          display: 'flex',
          margin: 'auto',
          marginTop: '50px',
          justifyContent: 'center',
          fontWeight: '500',
          fontSize: '25px',
          textAlign: 'center',
          flexDirection: 'column',
          color: '#FFF',
          fontFamily: 'Monserrat'

        }}>
          $ {product.price}

        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          display: 'flex',
          margin: 'auto',
          justifyContent: 'center',
          fontWeight: '500',
          fontSize: '15px',
          textAlign: 'center',
          flexDirection: 'column',
          color: '#FFF',
          fontFamily: 'Monserrat'
        }}>
          3 cuotas sin ineteres de <br />${resultFormat}
        </Typography>

      </CardContent>
      
      <CardActions>
        <Button size="small" sx={{
          margin: 'auto',
          display: 'flex',
          width: '100px',
          height: '50px',
          backgroundColor: '#FFF',
          borderRadius: '10px',
          flexWrap: 'wrap'
        }}>
          <Typography sx={{
            display: 'flex',
            fontSize: '15px',
            fontFamily: 'Monserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            color: '#2a2a2a'
          }}>
            Ver más
          </Typography>
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardProduct