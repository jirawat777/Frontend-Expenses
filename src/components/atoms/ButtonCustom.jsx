import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import LogoutIcon from '@mui/icons-material/Logout'
import Fab from '@mui/material/Fab'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'

function ButtonCustom (props) {
  const { color, action, title, icon, size } = props
  const dispatch = useDispatch()

  const theme = createTheme({
    shape: {
      borderRadius: 5
    }
  })
  const CheckAction = () => {
    if (action === 'logout') {
      dispatch.auth.logout()
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Fab
        variant='extended'
        color={color}
        className='btn-custom'
        onClick={() => CheckAction()}
        size={size}
      >
        <i className={icon}></i>&nbsp;
        {title}
      </Fab>
    </ThemeProvider>
  )
}

export default ButtonCustom
