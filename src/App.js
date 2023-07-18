import './App.css';
import React from "react";

// REACT ROUTER DOM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import Shop from './pages/Shop/Shop';
import Footer from './pages/Footer/Footer';

//CONTEXT
import { ProductsProvider } from './context/ProductsContext';

//PAGES
import CategoryPage from './pages/CategoryPage/CategoryPage';
import HomePage from './pages/Home/HomePage';
import DetailPage from './pages/DetailPage/DetailPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import Header from './components/Header/Header';





const App = () =>{

  return (
    <Router>
      
      <ProductsProvider>
        
        <div className="App">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/product-detail/:id" element={<DetailPage />}></Route>
            <Route 
              path="/product-brand/:brand" 
            element={<CategoryPage />} 
            >
            </Route>
          </Routes>
          <Footer />
        </div>
        
      </ProductsProvider>
      
    </Router>
    
  );
}

export default App;
