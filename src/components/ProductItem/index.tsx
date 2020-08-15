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

    return (

    );
}