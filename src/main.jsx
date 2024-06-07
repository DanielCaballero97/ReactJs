import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

const root = document.getElementById('root')
const vRoot = ReactDOM.createRoot(root)

vRoot.render(
  <App />
)
