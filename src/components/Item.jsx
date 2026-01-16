/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export const Item = ({ item, setActiveItem }) => {
  return (
    <motion.div
      className="item-card"
      onMouseEnter={() => setActiveItem(item)}
      onMouseLeave={() => setActiveItem(null)}
      initial={{ opacity: 0.8, scale: 1 }}
      whileHover={{ opacity: 1, scale: 1.05 }}
      style={{
        width: "200px",
        height: "150px",
        margin: "20px",
        backgroundColor: "#1a1a1a",
        border: "1px solid #333",
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          width: "100%",
          padding: "5px",
          fontSize: "12px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {item.title}
      </div>
    </motion.div>
  );
};
