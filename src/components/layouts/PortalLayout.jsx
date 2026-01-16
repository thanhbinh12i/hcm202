/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export const PortalLayout = ({ items, setActiveItem }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 250px)", // 5 columns, no wrap
        gap: "20px",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          layoutId={`item-${item.id}`}
          onClick={() => setActiveItem(item)}
          onMouseEnter={() => setActiveItem(item)}
          whileHover={{ scale: 1.05 }}
          style={{
            position: "relative",
            width: "250px",
            height: "380px", // More compact vertical height
            borderRadius: "6px",
            overflow: "hidden",
            cursor: "pointer",
            backgroundColor: "#111",
            border: "1px solid #333",
          }}
        >
          <motion.img
            layoutId={`img-${item.id}`}
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.7) grayscale(20%)",
            }}
          />
          <motion.div
            layoutId={`text-container-${item.id}`}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              padding: "1.5rem 1rem", // Balanced padding
              background:
                "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.4) 70%, transparent)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              minHeight: "140px", // Enough space for title + content
            }}
          >
            <motion.h3
              layoutId={`title-${item.id}`}
              style={{
                fontSize: "0.9rem",
                color: "#fff",
                margin: "0 0 8px 0",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                textAlign: "center",
                // Alignment Fix: Fixed height and flex centering
                minHeight: "2.8rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                lineHeight: "1.3",
              }}
            >
              {item.title}
            </motion.h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#ccc",
                  margin: 0,
                  opacity: 0.8,
                  lineHeight: 1.4,
                  maxWidth: "100%",
                }}
              >
                {item.context}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
