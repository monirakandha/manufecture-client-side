import { useEffect, useState } from "react";

const useSingleToolsDetails = (id) => {
  const [tool, setTool] = useState([]);

  useEffect(() => {
    fetch(`https://obscure-lake-52950.herokuapp.com/tools/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [id]);

  return [tool, setTool];
};

export default useSingleToolsDetails;
