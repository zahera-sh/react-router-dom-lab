import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { index } from '../services/productServices';


function ProductsList() {

    const [products, setProducts] = useState([]);

    async function getAllProducts() {
        try {

            const response = await index()
            setProducts(response);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);


    return (
        <>

            <h1>Products List</h1>

            <div className="ProductsList-container">

                {products.map((oneProduct) =>

                    <div key={oneProduct._id} className="productslist">
                        <Link to={`/products/${oneProduct._id}`}>▸ {oneProduct.title}</Link>
                    </div>

                )}

            </div>

        </>
    );
};


export default ProductsList;