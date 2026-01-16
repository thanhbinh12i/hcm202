/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export const SingleLayout = ({ items, setActiveItem }) => {
  const item = items[0];
  if (!item) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "2rem",
      }}
    >
      <motion.div
        layoutId={`item-${item.id}`}
        onClick={() => setActiveItem(item)}
        whileHover={{ scale: 1.02 }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "90vw",
          maxWidth: "1100px",
          height: "60vh",
          maxHeight: "500px",
          backgroundColor: "#111",
          borderRadius: "12px",
          overflow: "hidden",
          cursor: "pointer",
          border: "1px solid #333",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        {/* Left: Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
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
              filter: "brightness(0.8)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to left, #111 0%, transparent 30%)",
            }}
          />
        </div>

        {/* Right: Content */}
        <div
          style={{
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <motion.h2
            layoutId={`title-${item.id}`}
            style={{
              fontSize: "1.8rem",
              color: "#fff",
              margin: 0,
              lineHeight: 1.2,
              fontWeight: 500,
            }}
          >
            {item.title}
          </motion.h2>

          <p
            style={{
              fontSize: "1rem",
              color: "#ccc",
              lineHeight: 1.7,
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            {item.description}
          </p>

          {item.context && (
            <div
              style={{
                fontSize: "0.85rem",
                color: "#888",
                borderLeft: "2px solid #444",
                paddingLeft: "1rem",
                fontStyle: "italic",
              }}
            >
              {item.context}
            </div>
          )}

          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#666",
              fontSize: "0.8rem",
            }}
          >
            <span>Click để xem chi tiết</span>
            <span>→</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
