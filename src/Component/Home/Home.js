import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://polar-coast-16446.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <Container className="mt-5">
            <div className="row">
                {
                    products.map((product) => (<Products product={product} key={product.id}/>))
                }
            </div>
        </Container>
    );
};

export default Home;