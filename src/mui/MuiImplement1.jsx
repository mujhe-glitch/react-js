import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export const MuiImplement1 = () => {
    
    return (
    <div>
        <Box sx={{height:"100px",background:"White"}}>  
            <Typography variant='h4' sx={{textAlign:'center'}}>Mui Demo 1</Typography>
            <Button variant='contained'>demo1</Button>
            <Button variant='outlined'>DEMO 2</Button>
            <Button variant='contained ' sx={{color:"white",backgroundColor:"black"}}>demo 1</Button>
        </Box>

    </div>
  )
}
