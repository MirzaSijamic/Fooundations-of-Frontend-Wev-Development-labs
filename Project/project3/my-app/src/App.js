import { Typography, TextField, Box, Button} from '@mui/material'
import { LogInForm, RegisterForm } from "./components";
import { Routes, Route } from "react-router-dom"

const App = () => {

  const styles= {
    fontSize: 30,
  };

  return (
    <Box sx={{
      width: "100%",
      height: "98vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      bgcolor: "lightblue"
    }}>
      <Routes>
        <Route path="/login" element={<LogInForm />} />
        <Route path='/register' element={<RegisterForm />} />
      </Routes>
    </Box>
  )
}

export default App
