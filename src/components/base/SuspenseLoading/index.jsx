import React from 'react'
import { LinearProgress, Box } from '@mui/material'

import './index.scss'

const SuspenseLoading = () => {
  return (
    <div className="loading-container">
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    </div>
  )
}

export default SuspenseLoading
