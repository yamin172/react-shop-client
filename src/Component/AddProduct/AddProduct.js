import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <input defaultValue="test" {...register("example")} />
            
            <input {...register("exampleRequired", { required: true })} />
            
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;
