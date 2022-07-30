import './index.scss'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useSelector, useDispatch } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress'
import Swal from 'sweetalert2'

function ExpensesPage () {
  const profile = useSelector(state => state.auth?.profile)
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const dispatch = useDispatch()
  return <div> 12345 </div>
}

export default ExpensesPage
