import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter'
import { store } from './store/store'
import { HashRouter } from'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </HashRouter>
  </StrictMode>,
)
