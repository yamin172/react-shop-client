
import React from 'react';
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Products = (props) => {
    const {name, imageURL, price} = props.product;
    return (
            <div className="col-md-3 my-3">
                <Card style={{ width: "16rem" }} className="shadow border-0">
                <Card.Img variant="top" src={imageURL} className="p-3" style={{ backgroundColor : "#f7f7f7", height:"200px" }}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className="d-flex justify-content-between">
                        <h5>${price}</h5>
                        <Link as={Link} to="/orders"><Button variant="primary">Buy Now</Button></Link>
                    </div>
                </Card.Body>
                </Card>
            </div>
    );
};

export default Products;