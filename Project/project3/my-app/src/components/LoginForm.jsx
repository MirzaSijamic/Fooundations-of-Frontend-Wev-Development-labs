import { Typography, TextField, Box, Button} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    
  return (
    <form>
        <Box sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "20rem",
        bgcolor: "whitesmoke",
        padding: "1.5rem",
        borderRadius: "1rem",
        alignItems: "center"
      }}>
        <Typography >Log in pls</Typography>
        <TextField 
            label="Username" 
            name="username"
            sx={{marginY: "1rem"}} 
            value={formData.username}
            onChange={(event) => 
                setFormData((prev) => {
                    return{...prev, username: event.target.value};
                })
            }
        ></TextField>
        <TextField 
        label="Password"
        name="password" 
        type="password" 
        sx={{marginY: "1rem"}} 
        value={formData.password}
        onChange={(event) => 
            setFormData((prev) => {
                return{...prev, password: event.target.value};
            })
        }
        ></TextField>
        <Button variant='contained' color='secondary'>Log in</Button>
        <Link to='/register'>
            <Button variant='contained' color='success'>Not a user?</Button>
        </Link>
      </Box>
    </form>
  )
}

export default LoginForm
