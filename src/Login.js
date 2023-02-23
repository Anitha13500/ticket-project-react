import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [userName, setName ] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const changeclick =(eve) =>{
        if(eve.target.name=== "UserName") {
            setName(eve.target.userName)
        }
        else {
            setpassword (eve.target.password)

        }
    }
   const onchangeeve =()=>{
    if(userName=="" && password==""){
      alert("place fill your userName ")
      alert("place fill your password")
    }
    else if(userName==""){
          alert("place fill your userName")
    }
    else if(password==""){
         alert("place fill your password")
    }
    else if(userName!="" && password!=""){
           navigate("/Home")
    }
   }
  return (
    <div>
        <div className='log'>
            <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
          <TextField 
              id="outlined-multiline-flexible"
              name="UserName"
              label="UserName"
              multiline
              maxRows={4}
              onChange = {changeclick}
            />
          

            </div>
        </Box>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
          <TextField
              id="outlined-multiline-flexible"
              name="Password"
              label="password"
              multiline
              maxRows={4}
              onChange={changeclick}
            />
          

            </div>
        </Box>
    <Button variant="contained" onClick={() => onchangeeve ()}>Login</Button>
    </div>
    </div>
  )
}

export default Login
