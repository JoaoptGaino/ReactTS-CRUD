import React from 'react';
import api from '../../services/api';

export interface Product {
    id: number;
    name: string;
    price: number;
}
interface ProductItemProps {
    product: Product;
}
const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    function deleteProduct(){
        api.delete(`products/${product.id}`)
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
            </footer>
        </article>
    );
}

export default ProductItem;