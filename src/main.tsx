import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/unbounded/400.css';
import '@fontsource/unbounded/600.css';
import '@fontsource/unbounded/700.css';
import '@fontsource/jetbrains-mono/400.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
