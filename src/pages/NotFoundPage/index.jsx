import { Container } from '@mui/material'
import React from 'react'

import './index.scss'

const NotFoundPage = (props) => {
  return (
    <Container>
      <Container className="not-found-page">
        <h2 className="title">Page not found</h2>
      </Container>
    </Container>
  )
}

export default NotFoundPage
