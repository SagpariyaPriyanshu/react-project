import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
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
    <div style={{ paddingTop: "55px" }}>
      <div className="container">
        <ul>
          {items.map((item) => (
            <li
              key={item._id}
              style={{ paddingRight: 30, display: "inline-block" }}
            >
              <div
                style={{ margin: 10, display: "inline-block" }}
                key={item._id}
                dangerouslySetInnerHTML={{ __html: item.btnCompo }}
                onClick={() => handleButtonClick(item.btnCompo)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
