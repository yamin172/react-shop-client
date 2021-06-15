import axios from "axios";
import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";


const AddProduct = () => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    
    const onSubmit = (data) => {
        const productData = {
          name: data.name,
          price: data.price,
          imageURL: imageURL,
        };
        const url = `https://polar-coast-16446.herokuapp.com/addProduct`;
        
        console.log(productData);

        fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(res => console.log('server side response', res))
  };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set("key", "9d7cd3dccbef86e9ab54c867959e649b");
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
        setIMageURL(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
        })
    }
    return (
        <Container className="mt-5">
            <Card className="shadow border-0">
              <form onSubmit={handleSubmit(onSubmit)} className="mt-4 m-auto" style={{width:"300px"}}>
              
              <input placeholder="Product Name" {...register("name", { required: true })} className="m-2 form-control" />
              
              <input placeholder="Price" {...register("price", { required: true })} className="m-2 form-control"/>
              
              <input type="file" onChange={handleImageUpload} className="form-control m-2"/>
              
              <input type="submit" className="btn btn-success m-2 form-control"/>
              </form>
            </Card>
        </Container>
    );
};

export default AddProduct;
