import { Button, Card, CardActions, CardContent, CardMedia, Divider, /* Icon, */ Typography } from '@mui/material';
import React, { useContext } from 'react'
import './CardProductDetail.css'
import AddWidget from '../../components/AddWidget/AddWidget';
import RemoveWidget from '../RemoveWidget/RemoveWidget';
import { ProductsContext } from '../../context/ProductsContext';


const CardProductDetail = ({product}) => {
    const { id, price, name,brand, description, img } = product    
    const precioCuota = product.price / 3;
    const resultFormat = precioCuota.toFixed(2).toString()

    const [cart, setCart] = useContext(ProductsContext)

    

    const addToCart = () => {
        setCart((currentItems) => {
            const productFound =  currentItems.find((item) => item.id === id)
            if (productFound) {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return {...item,quantity: item.quantity + 1}
                    } else{
                        return item
                    }
                })
            } else {
                return [...currentItems, { id , quantity: 1, name, brand, price, img }];
            }
        })
    }

    const removeItem = (id) => { 

        setCart((currentItems) => {
            if ( currentItems.find((item) => item.id === id)?.quantity === 1 ){
                return currentItems.filter((item) => item.id !== id )
            } else {
                return currentItems.map((item) => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1 }
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    }

    const quantityPerItem = getQuantityById(id);

    return (
        <div className='container'>
            {id ? 
                <Card sx={{height: '600px',width: '1000px',borderRadius: '30px',justifyContent: 'space-between',flexDirection: 'row',display: 'flex'}}>

                    <CardContent sx={{display:'flex', flexDirection:'column', margin:'auto'}}>
                        <Typography variant="h5" sx={{color: '#2a2a2a', fontSize: '28px', fontWeight: '500', fontFamily: 'Monserrat', textAlign: 'center', margin: 'auto'}}>
                            {name}
                        </Typography>

                        <CardMedia
                            component="img"
                            image={img}
                            title={id}
                            sx={{width: '350px',height: '350px',borderRadius: '30px',margin: 'auto', marginLeft: '20px'}}
                        />
                        
                    </CardContent>
                    
                    <CardActions sx={{ display: 'flex', flexDirection: 'row', margin: 'auto'}}>

                        <CardContent sx={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>

                            <Typography variant="body2" sx={{marginTop: '50px',justifyContent: 'left',fontWeight: '500',fontSize: '25px',textAlign: 'left',color: '#2a2a2a',fontFamily: 'Monserrat'}}>
                                $ {price}

                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{justifyContent: 'center',fontWeight: '500',fontSize: '15px',textAlign: 'left',flexDirection: 'column',color: '#2a2a2a',fontFamily: 'Monserrat',marginBottom:'30px'}}>
                                3 cuotas sin ineteres de ${resultFormat}
                            </Typography>
                            <CardContent sx={{textAlign:'center' }}>
                                {quantityPerItem > 0 && (
                                    <Typography variant="body2" color="text.secondary">Cantidad: {quantityPerItem}</Typography>
                                )}
                            </CardContent>
                            {
                                quantityPerItem === 0 ? (
                                    <Button onClick={() => addToCart()} size="small" startIcon={<AddWidget />} variant="outlined" sx={{ width: '150px', height: '50px', backgroundColor: '#FFF', borderRadius: '10px', display:'flex', margin:'auto' }}>
                                        <Typography sx={{ display: 'flex', fontSize: '15px', fontFamily: 'Monserrat', fontStyle: 'normal', fontWeight: '500', color: '#2A2A2A' }}>
                                            Comprar
                                        </Typography>
                                    </Button>
                                ) : (
                                        <Button onClick={() => addToCart()} size="small" startIcon={<AddWidget />} variant="outlined" sx={{ width: '150px', height: '50px', backgroundColor: '#FFF', borderRadius: '10px', display: 'flex', margin: 'auto' }}>
                                            <Typography sx={{ textAlign: 'center', display: 'flex', fontSize: '10px', fontFamily: 'Monserrat', fontStyle: 'normal', fontWeight: '500', color: '#2A2A2A' }}>
                                            Agregar
                                        </Typography>
                                    </Button>
                                )
                            }
                            <br />
                            
                            {
                                quantityPerItem > 0 && (
                                    <Button onClick={() => removeItem(id)} size="small" startIcon={<RemoveWidget />} variant="outlined" sx={{ width: '150px', height: '50px', backgroundColor: '#FFF', borderRadius: '10px', display: 'flex', margin: 'auto' }}>
                                        <Typography sx={{ textAlign:'center',display: 'flex', fontSize: '10px', fontFamily: 'Monserrat', fontStyle: 'normal', fontWeight: '500', color: '#2A2A2A' }}>
                                            Remover
                                        </Typography>
                                    </Button>
                                )
                            }
                           
                            <br />
                            <Divider />
                            <br />
                            <Typography variant='h6' sx={{fontWeight: '500',fontSize: '20px',textAlign: 'left',flexDirection: 'column',color: '#2a2a2a',fontFamily: 'Monserrat'}}>
                                Descripción
                            </Typography>

                            <Typography paragraph sx={{fontWeight: '300',fontSize: '12px',textAlign: 'left',color: '#2a2a2a',fontFamily: 'Monserrat'}}>
                                {description}
                            </Typography>

                        </CardContent>

                    </CardActions>
                </Card>
            : null}
        </div>
        
    )
    
}

export default CardProductDetail
