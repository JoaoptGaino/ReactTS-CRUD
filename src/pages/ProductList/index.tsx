import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import ProductItem,{Product} from '../../components/ProductItem';
import './styles.css';
function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        api.get('products')
            .then(response => {
                const products = response.data;
                setProducts(products);
            })
    },[])

    return (
        <div id="product-list" className="container">
            <main>
                {
                    products.map((product:Product)=>{
                        return <ProductItem key={product.id} product={product}/>
                    })
                }
            </main>
        </div>
    );
}

export default ProductList;