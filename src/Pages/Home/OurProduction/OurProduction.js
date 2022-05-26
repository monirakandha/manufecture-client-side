import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
const OurProduction = ({ tool }) => {
  const [tools, setTools] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://obscure-lake-52950.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold">
        Our Total Tools : {tools.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 mt-10 gap-4 mb-20">
        {tools.map((tool) => (
          <ProductDetails key={tool._id} tool={tool}></ProductDetails>
        ))}
      </div>
    </div>
  );
};

export default OurProduction;
