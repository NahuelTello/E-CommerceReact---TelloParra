import { Alert, Collapse, IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
const MessageSuccess = ({purchaseID}) => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Stack sx={{width:'100%', display:'flex', margin:'auto'}} spacing={2}>
        <Alert severity='success' action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }>
            Gracias por su compra! Su Id de transaccion es: {purchaseID}
        </Alert>
    </Stack>
    </Collapse>
    
  )
}

export default MessageSuccess