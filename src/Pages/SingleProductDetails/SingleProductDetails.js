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

//   //delete

//   const deleteTool = (id) => {
//     const proceed = window.confirm("Are you sure?");
//     if (proceed) {
//       const url = `http://localhost:5000/tool/${id}`;
//       fetch(url, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           const remaining = tool.filter((book) => book._id !== id);
//           setBook(remaining);
//           // navigate(from);
//           toast("Car deleted succsessfully");
//         });
//     }
//   };
//   //delivery

//   const deliveredCar = () => {
//     const quantity = book.quantity - 1;
//     if (quantity === -1) {
//       toast.error("Stock Out plase add more instock");
//     } else {
//       const url = `https://nameless-retreat-76117.herokuapp.com/book/${id}`;
//       fetch(url, {
//         method: "PUT",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify({ quantity }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           toast.success("Delivered Car succsessfully");
//         });
//     }
//   };

  console.log(tool);
  const { img, price, name, description, quantity } = tool;
  return (
    // <div className="container">
    //   <div class="card mb-3">
    //     <div class="row no-gutters">
    //       <div class="col-md-4">
    //         <img src={img} class="card-img" alt="..." />
    //       </div>
    //       <div class="col-md-8">
    //         <div class="card-body">
    //           <h5 class="card-title">{name}</h5>
    //           <h5 class="card-title">Price : {price}</h5>
    //           <h5 class="card-title">Quantity : {quantity}</h5>
    //           <p class="card-text">
    //             <b>Description</b> : {description}
    //           </p>
    //         </div>
    //         <div
    //           class="btn-toolbar"
    //           role="toolbar"
    //           aria-label="Toolbar with button groups"
    //         >
    //           <div class="btn-group mr-2" role="group" aria-label="First group">
    //             <button
    //               onClick={() => deliveredCar(book._id)}
    //               type="button"
    //               class="btn btn-secondary"
    //             >
    //               Delivery
    //             </button>
    //           </div>
    //           <div className="d-flex flex-column">
    //             <form onSubmit={updateQuantity}>
    //               <input
    //                 className=""
    //                 type="Number"
    //                 id="restock"
    //                 name="restock"
    //                 placeholder="Quantity"
    //               />
    //               {/* <input className='' type="submit" value="Restock" /> */}
    //               <button className="btn btn-primary m-3">Restock</button>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
