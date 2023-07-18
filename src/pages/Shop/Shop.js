import React, {useContext, useState} from 'react'
import './Shop.css'

import { Alert, Button,   CardContent,  TextField, Typography} from '@mui/material';
import { collection, addDoc} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';
/* import ShopDetail from '../../components/ShopDetail/ShopDetail'; */
import { ProductsContext } from '../../context/ProductsContext';


import CardProductShop from '../../components/CardProductShop/CardProductShop';



const estadoInicial = {
        user: { name: "", city: "", email: ""}, 
        products: [] 
    }

const Shop = () => {
    const [activeAlert, setActiveAlert] = useState(null); 
    /* context del producto */
    const [items,setItems] = useContext(ProductsContext);
    /* useState del id de compra */// Este estado está destinado a guardar el id de la compra
    const [purchaseID, setPurchaseID] = useState("")


    const [order, setOrder] = useState(estadoInicial);
    // Funcion para poder guardar los datos de la compra, tanto del producto como del cliente
    const handleOnChange = (e) => {
        const {name, value} = e.target
        setOrder({ ...order,user:{...order.user, [name]: value}, products: items });
    };
    const [email2, setEmail2] = useState("")

    const handleOnChangeEmail = (e) => {
        setEmail2(e.target.value)
    }
    
    const limpiarCarrito = () => {
        setItems([])
        setOrder(estadoInicial)
        setEmail2("")
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        
        // Verificar si algún dato del usuario está vacío
        if (order.user.name === "" || order.user.city === "" || order.user.email === "") return setActiveAlert({ severity: "error", text: "Completa todos los datos del usuario" })

        
        // Verificar si no hay productos en el carrito
        if (order.products.length <= 0) return setActiveAlert({ severity: "error", text: "Agrega productos al carrito antes de realizar la compra" });
        //obtenemos el id que genera firebase por defecto automatico
        const docRef = await addDoc(collection(db, "purchasesOrder"), {
            order
        });
        
        setPurchaseID(docRef.id);    
        limpiarCarrito()    
    }   

    
    const name = order.user.name
    const city = order.user.city
    const email = order.user.email
    const checkEmail = ((email !== "" && email2 !== "") && (email === email2) )
    
    
    //Suma la cantidad de productos agregados al carrito
    const cant = items.reduce((acum, elemento)=>{
        return acum + elemento.quantity
    },0)
    /* const cantidadItem = items.reduce((acum, elemento) => {
        return acum + elemento.quantity;
    }, 0); */

    //Suma total a pagar de los productos cargados al carrito
    const totalPrice = items.reduce(
        (acum, elemento) => acum + elemento.quantity * elemento.price,0);

    


    return (
        <div className='container'>
            <Typography sx={{
                color: '#2a2a2a',
                fontSize: '30px',
                fontStyle: 'normal',
                fontWeight: '600',
                fontFamily: 'Monserrat',
            }}>
                Resumen de Compra
            </Typography>
            <CardContent >
                <div className='container'>
                    
                    {items.map((data) => {
                        return (
                            <div key={data.id}>
                                <CardProductShop product={data} />
                            </div>
                        )
                    })}
                </div>
                <CardContent sx={{display:'flex', margin:'auto', flexDirection:'row',justifyContent:'space-between'}}>
                    <Typography sx={{
                        color: '#2a2a2a',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontFamily: 'Monserrat',}}>
                        Total: ${totalPrice === 0 ? null : totalPrice}
                    </Typography>

                    <Typography sx={{
                        color: '#2a2a2a',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontFamily: 'Monserrat',
                        textAlign: 'right'
                    }} >
                        Cantidad: {cant === 0 ? null : cant}
                    </Typography>
                </CardContent>
                <form className='FormContainer' onSubmit={onSubmit}>
                    <TextField
                        placeholder="Nombre"
                        style={{ margin: 10, width: 400 }}
                        name="name"
                        value={name}
                        onChange={handleOnChange}
                    />
                    <TextField
                        placeholder="Ciudad"
                        style={{ margin: 10, width: 400 }}
                        name="city"
                        value={city}
                        onChange={handleOnChange}
                    />
                    <TextField
                        id='email'
                        placeholder="Email"
                        style={{ margin: 10, width: 400 }}
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                    />
                    <TextField
                        id='email2'
                        placeholder="Confirmar Email"
                        style={{ margin: 10, width: 400 }}
                        name="email"
                        value={email2}
                        onChange={handleOnChangeEmail}
                    />
                    {checkEmail ? (<Button className="btnSendAction" type="submit">
                        Enviar
                    </Button>):null}
                </form>
            </CardContent>
            {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}  
            {activeAlert && (
                <Alert severity={activeAlert.severity}> {activeAlert.text} </Alert>
            )}
        </div>
    )
}

export default Shop