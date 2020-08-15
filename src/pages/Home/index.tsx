import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaList, FaPen } from 'react-icons/fa';
import api from '../../services/api';
import "./styles.css";
function Home() {
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        api.get('countProducts')
            .then(response => {
                const { total } = response.data;
                setTotalProducts(total);
            })
    })
    return (
        <div id="home-page">
            <div id="home-page-content" className="container">
                <div className="logo-container">
                    <h2>Let's add some products</h2>
                </div>
                <img src="" alt="Logo image" className="hero-image" />

                <div className="buttons-container">
                    <Link to="/form" className="form"><FaPen /> Form</Link>
                    <Link to="/list" className="list"><FaList /> List</Link>
                </div>
                <p>Total of products: {totalProducts}</p>
            </div>
        </div>
    );
}

export default Home;