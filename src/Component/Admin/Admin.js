import React from 'react'
import {TextField,Button,MenuItem} from '@material-ui/core'

const Admin = () => {

    return (
        <div style={{width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:'start',alignItems:"center"}}>
  <TextField id="outlined-basic" label="Question" variant="outlined" /><br />
  <TextField id="outlined-basic" label="Answer A" variant="outlined" /><br />
  <TextField id="outlined-basic" label="Answer B" variant="outlined" /><br />
  <TextField id="outlined-basic" label="Answer C" variant="outlined" /><br />
  <TextField id="outlined-basic" label="Answer D" variant="outlined" /><br />


  <select>
    <option>Select</option>
    <option>Yes</option>
    <option>No</option>

    </select>
    <br />

  <Button variant="contained" color="primary">
  Submit
</Button>

        </div>
    )
}

export default Admin
