import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //react dom is used to render the component below
  //...inside and element with an id of root
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
