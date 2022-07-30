import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import ExpensesPage from './pages/ExpensesPage'
import { Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Layout from './layout'
function App () {
  const [count, setCount] = useState(0)
  const isLogin = useSelector(state => state.auth?.isLogin)
  return (
    <div className='App'>
     {isLogin === true && <Layout/>}
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/app/expenses' element={<ExpensesPage />} />
      </Routes>
    </div>
  )
}

export default App
