import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage';
import CreateProduct from './pages/CreateProduct';
import ProductsDetails from './pages/ProductsDetails';
import ProductsList from './pages/ProductsList';


function App() {

    return (
        <>
            <NavBar />

            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/products' element={<ProductsList />} />
                <Route path='/new-product' element={<CreateProduct />} />
                <Route path='/products/:productId' element={<ProductsDetails />} />
            </Routes>
        </>
    );
};


export default App;