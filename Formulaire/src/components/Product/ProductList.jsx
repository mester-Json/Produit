import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FruitTable from '../Fruit/Fruit';
import VegetableTable from '../Vege/Vege';
import { Container, CheckboxContainer, SearchInput } from './ProductList.style';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [hideOutOfStock, setHideOutOfStock] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des produits:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [hideOutOfStock, searchTerm]);

    const handleStockChange = (e) => {
        setHideOutOfStock(e.target.checked);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProducts = products.filter(product => {
        if (hideOutOfStock && product.number === 0) {
            return false;
        }
        if (searchTerm !== '' && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }
        return true;
    });

    const fruitProducts = filteredProducts.filter(product => product.category === 'Fruits');
    const vegetableProducts = filteredProducts.filter(product => product.category === 'Légumes');

    return (
        <Container>
            <h1>Liste des Produits</h1>
            <CheckboxContainer>
                <input
                    type="checkbox"
                    checked={hideOutOfStock}
                    onChange={handleStockChange}
                />
                <label>Masquer produits hors stock</label>
            </CheckboxContainer>

            <SearchInput
                type="text"
                placeholder="Rechercher par nom..."
                value={searchTerm}
                onChange={handleSearchChange}
            />

            <FruitTable products={fruitProducts} />
            <VegetableTable products={vegetableProducts} />
        </Container>
    );
};

export default ProductList;
