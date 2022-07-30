import './index.scss'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useSelector, useDispatch } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2'

function LoginPage () {
  const profile = useSelector(state => state.auth?.profile)
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const dispatch = useDispatch()

  const Login = () => {
    console.log(12345);
    Swal.showLoading()
    dispatch.auth.login({ username: Username, password: Password })
    Swal.close()
    window.location = '/app/expenses'
    console.log(7888);

  }
  const Logout = () => {
    dispatch.auth.logout()
  }
  return (
      <section className='ftco-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6 text-center mb-5'>
              <h2 className='heading-section'>Expenses</h2>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-lg-4'>
              <div className='login-wrap p-0'>
                <form action='#' className='signin-form' onSubmit={() => Login()}>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Username'
                      required
                      onChange={e => setUsername(e.target.value)}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      id='password-field'
                      type='password'
                      className='form-control'
                      placeholder='Password'
                      required
                      onChange={e => setPassword(e.target.value)}
                    />
                    <span
                      toggle='#password-field'
                      className='fa fa-fw fa-eye field-icon toggle-password'
                    ></span>
                  </div>
                  <div className='form-group'>
                    <button
                      type='submit'
                      className='form-control btn btn-primary submit px-3'
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default LoginPage
