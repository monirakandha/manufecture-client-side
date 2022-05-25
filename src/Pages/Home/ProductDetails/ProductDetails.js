import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({tool}) => {
  const {_id, name, img, description , price , quantity} = tool;
  const navigate = useNavigate();
  const navigateToSingleToolsDetails = id => {
  navigate(`/tool/${id}`);
  }
  console.log(tool);
  return (
    <div>
        <div class="card bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{name}!</h2>
            <p>${price}</p>
            <div class="card-actions">
            <button class="btn btn-primary text-white" onClick={() => navigateToSingleToolsDetails (_id)}>Know Details</button>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ProductDetails;
