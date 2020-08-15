import React, { useState, useEffect } from 'react';
import api from '../../services/api';

function ProductList() {
    const [products, setProducts] = useState([]);
    interface Product{
        id:number;
        name:string;
        price:number
    }
    useEffect(() => {
        api.get('products')
            .then(response => {
                const products = response.data;
                setProducts(products);
            })
    },[])

    return (
        <div id="product-list" className="container">
            <ul>
                {
                    products.map((product:Product) => {
                        return <div>{product.name}</div>
                    })
                }
            </ul>
        </div>
    );
}

export default ProductList;