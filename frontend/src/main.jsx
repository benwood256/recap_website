import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Library imports
import { BrowserRouter } from "react-router-dom";

// Bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './index.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
	<StrictMode>
	    <App />
	</StrictMode>
    </BrowserRouter>
)
