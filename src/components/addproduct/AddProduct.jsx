import React from 'react';
import { useForm } from 'react-hook-form';

const ProductForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Image:</label>
        <input type="file" {...register('image')} />
      </div>
      <div>
        <label>Product Name:</label>
        <input type="text" {...register('productName')} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" {...register('category')} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" {...register('price')} />
      </div>
      <div>
        <label>Status:</label>
        <select {...register('status')}>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>
      <div>
        <label>Rating:</label>
        <input type="number" step="0.1" min="0" max="5" {...register('rating')} />
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;
