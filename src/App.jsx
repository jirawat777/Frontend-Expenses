import './App.css'
import LoginPage from './pages/LoginPage'
import ExpensesPage from './pages/ExpensesPage'
import { Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GuardedRoute from './utils/GuardedRoute'

function App () {
  const isAuthorized = useSelector(state => state.auth?.isLogin)
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route path='/app/expenses' element={<GuardedRoute component={ExpensesPage} auth={isAuthorized} />}  />
      </Routes>
    </div>
  )
}

export default App
