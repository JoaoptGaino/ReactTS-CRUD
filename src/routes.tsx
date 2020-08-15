import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductForm from './pages/ProductForm';
import ProductList from './pages/ProductList';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/form" exact component={ProductForm} />
            <Route path="/list" exact component={ProductList} />
        </BrowserRouter>
    )
}

export default Routes;