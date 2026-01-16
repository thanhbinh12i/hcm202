/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

export const SlabLayout = ({ items, setActiveItem }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        width: "90vw",
        height: "70vh",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {items.map((item) => {
        const isHovered = hoveredId === item.id;
        const flexValue = isHovered ? 3 : 1;

        return (
          <motion.div
            key={item.id}
            layoutId={`item-${item.id}`}
            onMouseEnter={() => {
              setHoveredId(item.id);
              setActiveItem(item);
            }}
            onMouseLeave={() => setHoveredId(null)}
            animate={{ flex: flexValue }}
            transition={{ duration: 0.6, ease: "anticipate" }}
            style={{
              position: "relative",
              height: "100%",
              backgroundColor: "#000",
              overflow: "hidden",
              cursor: "pointer",
              borderRight: "1px solid #333",
            }}
          >
            <motion.img
              layoutId={`img-${item.id}`}
              src={item.image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: isHovered ? 0.8 : 0.4,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                left: "20px",
                width: "100%",
              }}
            >
              <motion.h3
                layoutId={`title-${item.id}`}
                style={{
                  fontSize: "1.5rem",
                  color: "#fff",
                  writingMode: isHovered ? "horizontal-tb" : "vertical-rl",
                  transform: isHovered ? "none" : "rotate(180deg)",
                  transition: "all 0.4s",
                }}
              >
                {item.title}
              </motion.h3>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
