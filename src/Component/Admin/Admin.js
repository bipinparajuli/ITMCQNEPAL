import React from 'react'
import {TextField,Button,Select} from '@material-ui/core'

const Admin = () => {
    return (
        <div style={{width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center"}}>
  <TextField id="outlined-basic" label="Question" variant="outlined" />

  <TextField id="outlined-basic" label="Answer" variant="outlined" />

<Select>
    <option value="true">yes</option>
    <option value="false">No</option>

</Select>


  <Button variant="contained" color="primary">
  Submit
</Button>

        </div>
    )
}

export default Admin
