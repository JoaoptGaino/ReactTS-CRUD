import React, { FormEvent, useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import './styles.css';

function ProductForm() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    function handleCreateProduct(e: FormEvent) {
        e.preventDefault();

        api.post('products', {
            name,
            price: Number(price)
        }).then(() => {
            alert("Created product");
            history.push('/');
        }).catch(() => {
            alert("Error while creating product");
        })
    }
    return (
        <div id="product-form" className="container">

            <main>
                <fieldset>
                    <legend>Product Form</legend>
                    <form onSubmit={handleCreateProduct}>
                        <div className="input-block">
                            <label htmlFor="name">Product name</label>
                            <input type="text" name="name" placeholder="Name" value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="price">Product price</label>
                            <input type="text" name="price" placeholder="Price" value={price}
                                onChange={(e) => { setPrice(e.target.value) }}
                            />
                        </div>
                        <footer>
                            <button type="submit">Create</button>
                        </footer>
                    </form>
                </fieldset>
            </main>
        </div>
    );
}

export default ProductForm;