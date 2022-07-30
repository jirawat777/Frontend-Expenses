import React from 'react'
import './index.scss'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'

function Layout () {
  return (
    <div className='sidebar'>
      <Button variant='outlined' startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </div>
  )
}

export default Layout
