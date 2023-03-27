import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import "./styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

