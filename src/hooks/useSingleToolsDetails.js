import { useEffect, useState } from "react";

const useSingleToolsDetails = (id) => {
  const [tool, setTool] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/tools/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [id]);

  return [tool, setTool];
};

export default useSingleToolsDetails;
