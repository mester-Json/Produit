import React, { useState } from 'react';
import FruitTable from '../Fruit/Fruit';
import VegetableTable from '../Vege/Vege';
import { Container, CheckboxContainer, SearchInput } from './ProductList.style';

const ProductList = ({ products }) => {
    const [hideOutOfStock, setHideOutOfStock] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleStockChange = (e) => {
        setHideOutOfStock(e.target.checked);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filtrage des produits en fonction des critères
    const filteredProducts = products.filter(product => {
        // Filtrage par stock disponible
        if (hideOutOfStock && product.number === 0) {
            return false;
        }
        // Filtrage par recherche sur le nom du produit
        if (searchTerm !== '' && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }
        return true;
    });

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

            <FruitTable products={filteredProducts.filter(product => product.category === 'Fruits')} />
            <VegetableTable products={filteredProducts.filter(product => product.category === 'Vegetables')} />
        </Container>
    );
};

export default ProductList;
