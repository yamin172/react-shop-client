import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand as={Link} to="/" href="#home"><img src="" alt="" />Bicycle Shop</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/" href="#orders">Orders</Nav.Link>
                    <Nav.Link as={Link} to="/addProduct" href="#addProduct">Add Product</Nav.Link>
                    <Nav.Link as={Link} to="/deals" href="#deals">Deals</Nav.Link>
                    <Nav.Link className="bg-danger text-white rounded" as={Link} href="#login">Login</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;