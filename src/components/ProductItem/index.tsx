import React from 'react';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';
export interface Product {
    id: number;
    name: string;
    price: number;
}
interface ProductItemProps {
    product: Product;
}
const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    const history = useHistory();
    function deleteProduct(){
        return api.delete(`products/${product.id}`)
        .then(response=>{
            alert("Deleted product");
            history.push('/list');
        })
        
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