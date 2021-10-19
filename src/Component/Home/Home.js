import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import Products from '../Products/Products';
import Slider from '../Slider/Slider';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://polar-coast-16446.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <>
            <Container className="mt-5">
                <Slider />
                <Cards />
                <div className="row mt-3">
                    {
                        products.map((product) => (<Products product={product} key={product.id}/>))
                    }
                </div>
            </Container>
        </>
    );
};

export default Home;