import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routers/router'
import './index.css'

import AuthProvider from './contects/AuthProvider'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider >
    <RouterProvider router={router}/>    
   </AuthProvider>
  </React.StrictMode>,
)
