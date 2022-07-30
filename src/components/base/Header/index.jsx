import React from 'react'
import './index.scss'
import Box from '@mui/material/Box'

function Header (props) {
  const { title, icon } = props
  return (
    <div className='header'>
      <Box
        sx={{
          boxShadow: 3,
          height: '4rem',
          bgcolor: theme =>
            theme.palette.mode === 'dark' ? '#131b28' : '#131b28',
          color: theme =>
            theme.palette.mode === 'dark' ? 'grey.300' : '#fff',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'left',
          fontSize: '1.65rem',
          fontWeight: '700'
        }}
      >
        <div className='header-title'>
          <div className='icon-position'><i className={icon} /></div>
          <div className='title-position'>{title}</div>
        </div>
      </Box>
    </div>
  )
}

export default Header
