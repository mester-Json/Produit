import React from 'react';
import { Container, Table } from './Fruit.style';

const FruitTable = ({ products }) => {
    return (
        <Container>
            <h2>Produits Fruits</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.name}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.number}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default FruitTable;
