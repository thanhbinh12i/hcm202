import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";

export const CoreFocusPanel = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (item && e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, item]);

  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          key="core-focus-overlay"
          className="focus-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(10px)",
            pointerEvents: "auto",
          }}
          onClick={onClose}
        >
          {/* Center Panel */}
          <motion.div
            className="focus-panel-card"
            style={{
              display: "grid",
              gridTemplateColumns: "40% 60%",
              width: "80vw",
              height: "70vh",
              maxWidth: "1200px",
              background: "#111",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              border: "1px solid #333",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Content */}
            <div
              style={{
                padding: "3rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <button
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: "2rem",
                  left: "3rem",
                  background: "none",
                  border: "none",
                  color: "#666",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                ← Quay lại
              </button>

              <motion.h2
                layoutId={`title-${item.id}`}
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1.5rem",
                  lineHeight: 1.1,
                  fontWeight: 300,
                  color: "#fff",
                  marginTop: "2rem",
                }}
              >
                {item.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  fontSize: "1.1rem",
                  color: "#ccc",
                  lineHeight: "1.6",
                  marginBottom: "2rem",
                }}
              >
                {item.description}
              </motion.p>

              {item.context && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    fontSize: "0.9rem",
                    color: "#888",
                    borderLeft: "1px solid #444",
                    paddingLeft: "1rem",
                    fontStyle: "italic",
                    marginBottom: "1rem",
                  }}
                >
                  {item.context}
                </motion.div>
              )}
            </div>

            {/* Right: Image */}
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
                  filter: "brightness(0.9)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, #111 0%, transparent 20%)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
