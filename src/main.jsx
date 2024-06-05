import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root')
const vRoot = ReactDOM.createRoot(root)

vRoot.render(
  <App />
)
