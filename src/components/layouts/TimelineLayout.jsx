/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export const TimelineLayout = ({ items, setActiveItem }) => {
  // Grid placement configuration for 3 items in a row
  const getGridStyle = (index, total) => {
    if (total === 3) {
      return { gridColumn: index + 1 };
    }
    // For 5 items (2-1-2 layout)
    switch (index) {
      case 0:
        return { gridColumn: "1", gridRow: "1" };
      case 1:
        return { gridColumn: "3", gridRow: "1" };
      case 2:
        return {
          gridColumn: "2",
          gridRow: "2",
          transform: "scale(1.1)",
          zIndex: 5,
        };
      case 3:
        return { gridColumn: "1", gridRow: "3" };
      case 4:
        return { gridColumn: "3", gridRow: "3" };
      default:
        return {};
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            items.length === 3 ? "repeat(3, 1fr)" : "1fr 1.4fr 1fr",
          gap: "1.5rem",
          width: "90vw",
          maxWidth: "1000px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#2a2a2a",
              borderColor: "#fff",
            }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            onClick={() => setActiveItem(item)}
            style={{
              ...getGridStyle(index, items.length),
              backgroundColor: "#222",
              border: "1px solid #444",
              borderRadius: "8px",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              cursor: "pointer",
              height: "150px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                color: "#fff",
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {item.title}
            </h3>
            <div
              style={{ marginTop: "10px", color: "#888", fontSize: "0.8rem" }}
            >
              Click để xem →
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
