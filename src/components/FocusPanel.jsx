/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export const FocusPanel = ({ item, onClose }) => {
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
          key="focus-overlay"
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
          <motion.div
            className="focus-panel-card"
            style={{
              display: "grid",
              gridTemplateColumns: "45% 55%",
              width: "85vw",
              height: "75vh",
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
                display: "flex",
                flexDirection: "column",
                height: "100%",
                position: "relative",
              }}
            >
              {/* Fixed Header */}
              <div
                style={{
                  padding: "2rem 2.5rem 1rem 2.5rem",
                  borderBottom: "1px solid #222",
                  flexShrink: 0,
                }}
              >
                <button
                  onClick={onClose}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#666",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    padding: 0,
                    marginBottom: "1rem",
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
                    fontSize: "2rem",
                    lineHeight: 1.2,
                    fontWeight: 400,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {item.title}
                </motion.h2>
              </div>

              {/* Scrollable Content */}
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "1.5rem 2.5rem 2rem 2.5rem",
                }}
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    fontSize: "1rem",
                    color: "#ccc",
                    lineHeight: "1.9",
                    marginBottom: "1.5rem",
                    whiteSpace: "pre-line",
                    margin: 0,
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
                      borderLeft: "2px solid #444",
                      paddingLeft: "1rem",
                      fontStyle: "italic",
                      marginTop: "1.5rem",
                    }}
                  >
                    {item.context}
                  </motion.div>
                )}

                {/* Extended Content */}
                {(item.achievement || item.challenge) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                      marginTop: "1.5rem",
                    }}
                  >
                    {item.achievement && (
                      <div
                        style={{
                          padding: "1rem",
                          background: "rgba(76, 175, 80, 0.1)",
                          borderLeft: "4px solid #4caf50",
                          borderRadius: "0 4px 4px 0",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "0.5rem",
                          }}
                        >
                          <span
                            style={{ color: "#4caf50", fontSize: "1.2rem" }}
                          >
                            ✔
                          </span>
                          <strong
                            style={{
                              color: "#4caf50",
                              textTransform: "uppercase",
                              fontSize: "0.85rem",
                            }}
                          >
                            Thành Tựu
                          </strong>
                        </div>
                        <p
                          style={{
                            color: "#eee",
                            margin: 0,
                            lineHeight: 1.6,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {item.achievement}
                        </p>
                      </div>
                    )}

                    {item.challenge && (
                      <div
                        style={{
                          padding: "1rem",
                          background: "rgba(255, 152, 0, 0.1)",
                          borderLeft: "4px solid #ff9800",
                          borderRadius: "0 4px 4px 0",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "0.5rem",
                          }}
                        >
                          <span
                            style={{ color: "#ff9800", fontSize: "1.2rem" }}
                          >
                            ⚠
                          </span>
                          <strong
                            style={{
                              color: "#ff9800",
                              textTransform: "uppercase",
                              fontSize: "0.85rem",
                            }}
                          >
                            Thách Thức
                          </strong>
                        </div>
                        <p
                          style={{
                            color: "#eee",
                            margin: 0,
                            lineHeight: 1.6,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {item.challenge}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
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
                    "linear-gradient(to right, #111 0%, transparent 25%)",
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
