import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getOneProduct } from '../services/productServices';

function ProductsDetails() {

    const [product, setProduct] = useState(null);
    const { productId } = useParams();

    async function getProduct() {
        try {

            const response = await getOneProduct(productId);
            setProduct(response);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <>

            <div className="ProductsDetails-container">

                <h1>Products Details</h1>

                {product

                    ? (<>
                        <p>Title: {product.title}</p>
                        <p>Description: {product.description}</p>
                        <p>Category: {product.category}</p>
                        <p>Price: {product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        <br />
                        <p>Id: {product._id}</p>
                    </>)

                    : <p>Loading...</p>}

            </div>

        </>
    );
};

export default ProductsDetails;