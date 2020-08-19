import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';
import './styles.css';
export interface Product {
    id: number;
    name: string;
    price: number;
}
interface ProductItemProps {
    product: Product;
}
const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    const [products,setProducts] = useState<Product[]>([]);
    useEffect(()=>{
        api.get('products')
        .then(response=>{
            setProducts(response.data);
        });
    })
    function deleteProduct(){
        return api.delete(`products/${product.id}`)
        .then(response=>{
            console.log(response);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    function editProduct(){
        return api.put(`products/${product.id}`,{
            name:"Test"
        })
        .then(response=>{
            console.log(response);
        });
    }
    return (
        <article className="product-item">
            <header>
                <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                </div>
            </header>
            <footer>
                <button onClick={deleteProduct}>Delete</button>
                <button onClick={editProduct}>Update</button>
            </footer>
        </article>
    );
}

export default ProductItem;