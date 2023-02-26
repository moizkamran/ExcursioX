import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//main stylesheet import
import './styles.css'
import { NotificationsProvider } from '@mantine/notifications';
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <React.StrictMode>
    <NotificationsProvider>
    <App />
    </NotificationsProvider>
  </React.StrictMode>
  </AuthContextProvider>
)
