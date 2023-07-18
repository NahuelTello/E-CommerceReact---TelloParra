import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
/* import AddWidget from '../AddWidget/AddWidget'; */



import "./CardProductShop.css"
import { Button, CardActions} from '@mui/material';
import { ProductsContext } from '../../context/ProductsContext';
import AddWidget from '../AddWidget/AddWidget';
import RemoveWidget from '../RemoveWidget/RemoveWidget';
const CardProductShop = ({ product }) => {
    const { id, price, name, brand,  img } = product   
    const [cart, setCart] = useContext(ProductsContext)
    const addToCart = () => {
        setCart((currentItems) => {
            const productFound = currentItems.find((item) => item.id === id)
            if (productFound) {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            } else {
                return [...currentItems, { id, quantity: 1, name, brand, price, img }];
            }
        })
    }

    const removeItem = (id) => {

        setCart((currentItems) => {
            if (currentItems.find((item) => item.id === id)?.quantity === 1) {
                return currentItems.filter((item) => item.id !== id)
            } else {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
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

        <Card sx={{ margin: 'auto', display: 'flex', width: '700px', height: '150px', marginBottom: '15px', background: '#2a2a2a', borderRadius: '30px' }}>
                <CardMedia
                    component="img"
                    image={product.img}
                    title={product.id}
                    sx={{
                        width: '100px',
                        height: '100px',
                        margin: '20px',
                        marginTop: '20px',
                        borderRadius:'30px'
                    }}
                />

                <CardContent sx={{ margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '500px', height: '100px', }}>

                    <Typography variant="h5" sx={{
                        width: '130px',
                        height: '15px',
                        color: '#FFF',
                        fontSize: '15px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontFamily: 'Monserrat',
                        textAlign: 'left'
                    }}>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" sx={{
                        marginTop: '5px',
                        fontWeight: '500',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        textAlign: 'left',
                        color: '#FFF',
                        fontFamily: 'Monserrat'
                    }}>
                        Precio | $ {product.price}
                    </Typography>
                </CardContent>
                <CardContent sx={{display:'flex', flexDirection:'column'}}>
                    {quantityPerItem > 0 && (
                    <Typography variant="body2" color="text.secondary" sx={{ color: '#FFF', textAlign: 'left', fontWeight: '500', fontStyle: 'normal', fontFamily: 'Monserrat' }}> Cantidad: {quantityPerItem}</Typography>
                    )}
                    <CardActions>
                        <Button onClick={() => addToCart()} size="small" startIcon={<AddWidget />} variant="outlined" sx={{ width: '150px', height: '50px', backgroundColor: '#FFF', borderRadius: '10px' }}>
                            <Typography sx={{ textAlign: 'center', display: 'flex', fontSize: '10px', fontFamily: 'Monserrat', fontStyle: 'normal', fontWeight: '500', color: '#2A2A2A' }}>
                                Agregar
                            </Typography>
                        </Button>
                        <Button onClick={() => removeItem(id)} size="small" startIcon={<RemoveWidget />} variant="outlined" sx={{ width: '150px', height: '50px', backgroundColor: '#FFF', borderRadius: '10px', flexWrap: 'wrap' }}>
                            <Typography sx={{ textAlign: 'center', display: 'flex', fontSize: '10px', fontFamily: 'Monserrat', fontStyle: 'normal', fontWeight: '500', color: '#2A2A2A' }}>
                                Remover
                            </Typography>
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>

    )
}

export default CardProductShop