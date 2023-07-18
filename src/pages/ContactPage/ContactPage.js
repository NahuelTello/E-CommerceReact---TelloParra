import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";

import { db } from "../../firebase/firebaseConfig";

import TextField from "@mui/material/TextField";
import { Alert, Button, CardContent, Typography } from '@mui/material';

import './ContactPage.css'
const initialState = {
  name: "",
  city: "",
  email: "",
  message:""
};


const ContactPage = () => {
  const [activeAlert, setActiveAlert] = useState(null); 
  const [values, setValues] = useState("");
  const [messagesValue, setMessagesValue] = useState("");
  // Este estado está destinado a guardar el id de la consulta
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Verificar si algún dato del usuario está vacío
    if (values.name === "" || values.city === "" || values.email === "" || email2 === "" || values.message === "" || messagesValue === "" ) return setActiveAlert({ severity: "error", text: "Completa todos los datos del usuario" })

    //obtenemos el id que genera firebase por defecto automatico
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "contacMessage"), {
      values,
    }); 
    setActiveAlert({ severity: "success", text: `Mensaje enviado con exito` })

    setMessagesValue(docRef.id);
    setValues(initialState);
  };

  const [email2, setEmail2] = useState('')

  const handleOnChangeEmail = (e) => {
    setEmail2(e.target.value)
  }
  const checkEmail = ((values.email !== "" && email2 !== "") && (values.email === email2))

  return (
    <div className='container'>
      <Typography sx={{
        color: '#2a2a2a',
        fontSize: '30px',
        fontStyle: 'normal',
        fontWeight: '600',
        fontFamily: 'Monserrat',
      }}>
        Contactanos
      </Typography>
      <CardContent>
        <Typography sx={{
          color: '#2a2a2a',
          fontSize: '15px',
          fontStyle: 'normal',
          fontWeight: '500',
          fontFamily: 'Monserrat',
          textAlign:'center'
        }}>
          Dejanos tu mensaje y te responderemos a la brevedad!
        </Typography>
        <form className='FormContainer' onSubmit={onSubmit}>
          <TextField
            placeholder="Nombre"
            style={{ margin: 10, width: 400 }}
            name="name"
            onChange={handleOnChange}
          />
          <TextField
            placeholder="Ciudad"
            style={{ margin: 10, width: 400 }}
            name="city"
            onChange={handleOnChange}
          />
          <TextField
            id='email1'
            placeholder="Email"
            style={{ margin: 10, width: 400 }}
            name="email"
            onChange={handleOnChange}
          />
          <TextField
            id='email2'
            placeholder="Confirmar Email"
            style={{ margin: 10, width: 400 }}
            name="email"
            onChange={handleOnChangeEmail}
          />
          <TextField
            placeholder="Mensaje..."
            name="message"
            style={{ margin: 10, width: 400 }}
            rows={5}
            multiline
            onChange={handleOnChange}
          />
          {checkEmail ? (<Button className="btnSendAction" type="submit">
            Enviar
          </Button>) : null}
        </form>
      </CardContent>
      {activeAlert && (
        <Alert severity={activeAlert.severity}> {activeAlert.text} </Alert>
      )}
    </div>
  )
}

export default ContactPage