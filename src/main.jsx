import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal/index.jsx'

import './index.css'

import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <ConteudoPrincipal /> },
      { path: "sobre", element: <Sobre /> },
      { path: "contato", element: <Contato /> },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)