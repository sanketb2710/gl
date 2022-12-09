import AddressPage from 'pages/AddressPage';
import CartPage from 'pages/CartPage';
import ProductDetailPage from 'pages/ProductDetailPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import {
//   ChakraProvider,
//   // Box,
//   // Text,
//   // Link,
//   // VStack,
//   // Code,
//   // Grid,
//   theme,
// } from '@chakra-ui/react';

import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    // <Layout>
    <Router>
      <Routes>
        <Route exact path="/product-detail" element={<ProductDetailPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/address" element={<AddressPage />} />

        {/* </Route> */}
        <Route exact path="/" element={<HomePage />} />
        {/* <Home /> */}
        {/* <HomePage /> */}
        {/* </Route> */}
      </Routes>
    </Router>
    // </Layout>
    // <ChakraProvider>

    // </ChakraProvider>
  );
}

export default App;
