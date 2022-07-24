import './index.scss';
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'

function LoginPage() {
    const profile = useSelector((state) => state.auth?.profile)
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const dispatch = useDispatch()

    const Login = () => {
        dispatch.auth.login({ username: Username, password: Password })
    }
    const Logout = () => {
        dispatch.auth.logout()
    }
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {profile}
            <TextField id="outlined-basic" type="text" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" onClick={() => Login()}>Login</Button>
            <Button variant="contained" onClick={() => Logout()}>Logout</Button>
        </Box>
    )
}

export default LoginPage