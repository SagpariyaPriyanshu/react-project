import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
const URL = "http://localhost:8000";

export default function ButtonCompo() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${URL}/buttonComponents`);
      setItems(result.data);
    };
    fetchItems();
  }, []);

  const handleButtonClick = (btnCompo) => {
    navigator.clipboard.writeText(btnCompo);
    alert("code copied");
  };
  
  return (
    <Box paddingTop="55px">
      <Box display="flex" justifyContent="center" alignItems="center">
        {items.map((item) => (
          <Box
            key={item._id}
            sx={{ margin: 2, padding: 1, minWidth: 120 }}
          >
            <div
              key={item._id}
              dangerouslySetInnerHTML={{ __html: item.btnCompo }}
              onClick={() => handleButtonClick(item.btnCompo)}
            />
          </Box>
        ))} 
      </Box>
    </Box>
  );
}
