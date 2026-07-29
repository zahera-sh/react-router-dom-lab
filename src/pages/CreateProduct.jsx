import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { createProduct } from '../services/productServices';


function CreateProduct() {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        quantity: "",
    });

    const navigate = useNavigate();

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    };

    async function handleSubmit(event) {
        event.preventDefault();
        try {

            const createdProduct = await createProduct(formData);
            navigate("/products");

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>

            <div className="CreateProduct-container">

                <h1>Create Product</h1>

                <br />

                <form onSubmit={handleSubmit}>

                    <label htmlFor="title">Product: </label>
                    <input
                        name='title'
                        id='title'
                        type="text"
                        onChange={handleChange}
                    />

                    <br />
                    <br />

                    <label htmlFor="description">Description: </label>
                    <input
                        name='description'
                        id='description'
                        type="text"
                        onChange={handleChange}
                    />

                    <br />
                    <br />

                    <label htmlFor="category">Category: </label>
                    <input
                        name='category'
                        id='category'
                        type="text"
                        onChange={handleChange}
                    />

                    <br />
                    <br />

                    <label htmlFor="price">Price: </label>
                    <input
                        name='price'
                        id='price'
                        type="number"
                        onChange={handleChange}
                    />

                    <br />
                    <br />

                    <label htmlFor="quantity">Quantity: </label>
                    <input
                        name='quantity'
                        id='quantity'
                        type="number"
                        onChange={handleChange}
                    />

                    <br />
                    <br />

                    <button>Submit</button>

                </form>

            </div>

        </>
    );
};


export default CreateProduct;