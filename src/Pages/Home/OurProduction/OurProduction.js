import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
const OurProduction = ({ book }) => {
  const [tools, setTools] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 mt-10 gap-4 mb-20">
          {tools.map((tool) => (
              <ProductDetails key={tool.id} tool={tool}></ProductDetails>
          ))}
      </div>

  );
};

export default OurProduction;
