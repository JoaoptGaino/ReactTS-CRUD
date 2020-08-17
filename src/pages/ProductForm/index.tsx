import React, { FormEvent, useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

function ProductForm() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    function handleCreateProduct(e: FormEvent) {
        e.preventDefault();

        api.post('products',{
            name,
            price:Number(price)
        }).then(()=>{
            alert("Created product");
            history.push('/');
        }).catch(()=>{
            alert("Error while creating product");
        })
    }
    return (
        <div id="product-form" className="container">
            <h1>Product Form</h1>
            <main>
                <form onSubmit={handleCreateProduct}>
                    <input type="text" name="name" placeholder="Name" value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <input type="text" name="price" placeholder="Price" value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                    <button type="submit">Criar</button>
                </form>
            </main>
        </div>
    );
}

export default ProductForm;