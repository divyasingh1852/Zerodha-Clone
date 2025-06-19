import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";  //react-router

import HomePage from './landing_page/home/HomePage'
import Home from './landing_page/signup/Home';
import Login from "./landing_page/signup/Login.jsx";
import Signup from "./landing_page/signup/Signup.jsx";

import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  )
}

export default App












// import { Routes, Route } from "react-router-dom";
// import { useCookies } from "react-cookie";

// import HomePage from "./landing_page/home/HomePage";
// import Home from "./landing_page/signup/Home";
// import Login from "./landing_page/signup/Login";
// import Signup from "./landing_page/signup/Signup";
// import AboutPage from "./landing_page/about/AboutPage";
// import ProductPage from "./landing_page/products/ProductPage";
// import PricingPage from "./landing_page/pricing/PricingPage";
// import SupportPage from "./landing_page/support/SupportPage";
// import NotFound from "./landing_page/NotFound";
// import ProtectedRoute from "./ProtectedRoute"; // ✅

// function App() {
//   return (
//     <Routes>
//       {/* Public routes */}
//       <Route path="/" element={<HomePage />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />

//       {/* Protected routes */}
//       <Route
//         path="/home"
//         element={
//           <ProtectedRoute>
//             <Home />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/about"
//         element={
//           <ProtectedRoute>
//             <AboutPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/products"
//         element={
//           <ProtectedRoute>
//             <ProductPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/pricing"
//         element={
//           <ProtectedRoute>
//             <PricingPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/support"
//         element={
//           <ProtectedRoute>
//             <SupportPage />
//           </ProtectedRoute>
//         }
//       />

//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// export default App;








