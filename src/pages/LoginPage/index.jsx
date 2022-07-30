import './index.scss'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import ButtonCustom from '../../components/atoms/ButtonCustom'

function LoginPage () {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const dispatch = useDispatch()

  const Login = async () => {
    if (Username.length !== 0 && Password.length !== 0) {
      Swal.showLoading()
      try {
        await dispatch.auth.login({
          username: Username,
          password: Password
        })
        Swal.close()
        window.location.href = 'app/expenses'
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title:  error?.response?.statusText,
          text: error?.response?.data?.detail
        })
      }
    }
  }
  return (
    <section className='ftco-section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center mb-5'>
            <span className='heading-section'>ระบบรายรับรายจ่าย</span>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-lg-4'>
            <div className='login-wrap p-0'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='ชื่อผู้ใช้'
                    required
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    id='password-field'
                    type='password'
                    className='form-control'
                    placeholder='รหัสผ่าน'
                    required
                    onChange={e => setPassword(e.target.value)}
                  />
                  <span
                    toggle='#password-field'
                    className='fa fa-fw fa-eye field-icon toggle-password'
                  ></span>
                </div>
                <div className='form-group' onClick={() => Login()}>
                  <ButtonCustom
                    color='primary'
                    title='เข้าสู่ระบบ'
                    icon={'fas fa-sign-in-alt'}
                  >
                    เข้าสู่ระบบ
                  </ButtonCustom>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
