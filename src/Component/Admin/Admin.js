import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import './Admin.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTasks } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
    return (
        <Row>
            <div className="col-md-2 admin-btn text-light">
                <h3 className="text-center mt-3">Dashboard</h3>
                <Link to=""><h6 className="text-light m-4 mt-4"><FontAwesomeIcon icon={faTasks}/> Manage Product</h6></Link>
                <Link to=""><h6 className="text-light m-4 mt-4"><FontAwesomeIcon icon={faPlus}/> Add Product</h6></Link>
                <Link to=""><h6 className="text-light m-4 mt-4"><FontAwesomeIcon icon={faEdit}/> Edit Product</h6></Link>
            </div>
            <div className="col-md-10 addProduct">
                <div>
                    <AddProduct />
                </div>
            </div>
        </Row>
    );
};

export default Admin;