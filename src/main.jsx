import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { getPersistor } from '@rematch/persist'
import store from './store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor = getPersistor()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
