import React, { useContext } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Component/Image/—Pngtree—cartoon cartoon boy little boy_3921535.png';
import "./Header.css";


const Header = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <Navbar  bg="light" variant="light" expand="lg" className="sticky-top">
            <Container>
                <Navbar.Brand as={Link} to="/" href="#home">Bicycle E-Shop BD<img src={logo} alt="logo img" style={{ width: "35px"}} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/home" href="#home" className="mr-3">Home</Nav.Link>
                            <Nav.Link as={Link} to="/orders" href="#orders" className="mr-3">Orders</Nav.Link>
                            {/* <Nav.Link as={Link} to="/addProduct" href="#addProduct"></Nav.Link> */}
                        <Nav.Link as={Link} to="/admin" href="#Admin" className="mr-3">Admin</Nav.Link>
                        {
                            loggedInUser.photoURL ? <img src={loggedInUser.photoURL} alt="" className="logo"/> : 
                                <Nav.Link className="bg-danger text-white rounded" as={Link} to="/login" href="#login">Login</Nav.Link>
                        }
                            
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;