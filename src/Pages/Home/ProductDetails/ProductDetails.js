import React from 'react';

import { useNavigate } from 'react-router-dom';

const ProductDetails = ({tool}) => {
  const { _id, name, img, description , price , quantity} = tool;
  const navigate = useNavigate();
  const navigateToBookDetails = id => {
    navigate(`/book/${id}`);
  }
  return (
    <div>
        <div class="card  bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{name}!</h2>
            <p>${price}</p>
            <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          ${price}
          </Card.Text>
          <Card.Text>
          <b>Instock : {quantity}</b>
          </Card.Text>
          <Card.Text>
          {description}
          </Card.Text>
          <Button  onClick={() => navigateToBookDetails (_id)} variant="primary">Stock Update</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default ProductDetails;
