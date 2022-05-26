import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useSingleToolsDetails from "../../hooks/useSingleToolsDetails";
import { useNavigate } from 'react-router-dom';
const SingleProductDetails = () => {
  const { id } = useParams();
  
  const [tool, setTool] = useSingleToolsDetails(id);
  const navigate = useNavigate();
  const navigateToPurchase = id => {
    navigate("/purchase");
    }
  console.log(tool._id);
  const updateQuantity = (event) => {
    event.preventDefault();
    const quantity =
      parseFloat(event.target.restock.value) + parseFloat(tool.quantity);

    const url = `https://obscure-lake-52950.herokuapp.com/tools/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Quantity updated succsessfully");
        window.location.reload();
      });
    event.target.reset();
  };
  console.log(tool);
  const { img, price, name, description, quantity } = tool;
  return (
      <div class="grid grid-cols-2 gap-4">
        <div class="card bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>

      </div>

  <div>
    <div class="card-body text-left mt-20">
          <h2 class="card-title">{name}</h2>
          <p className="text-2xl">{description}</p>
          <p className="text-2xl font-bold">PRICE: $ {price}</p>
          <p className="text-2xl font-bold"> QUANTITY : {quantity}</p>
          <div class="card-actions">
            <button class="btn btn-primary text-white" onClick={() => navigateToPurchase ()}>Buy Now</button>
          </div>
        </div>
    </div>
</div>

    
  );
};

export default SingleProductDetails;
