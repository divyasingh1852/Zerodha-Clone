import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from "react-router-dom";  //install- npm i react-router-dom
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CookiesProvider } from "react-cookie"; 


createRoot(document.getElementById('root')).render(
 <StrictMode>
 <CookiesProvider> 
    <BrowserRouter>
     <Navbar />
      <App />
       <ToastContainer /> 
     <Footer />
    </BrowserRouter>
</CookiesProvider>
  </StrictMode>
)










