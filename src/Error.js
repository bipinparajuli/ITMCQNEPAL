import React from 'react'
import {Button} from '@material-ui/core'

const Error = () => {
    return (
        <div style={{width:"100%",height:"400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            
            <h5>Sorry, you might lost, please go back !!!</h5>

            <Button variant="contained" color="primary" href="/">
  Go Back
            </Button>
        </div>
    )
}

export default Error
