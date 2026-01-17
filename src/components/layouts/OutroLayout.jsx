/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export const OutroLayout = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "2rem",
        gap: "1.5rem",
        position: "relative",
      }}
    >
      {/* Decorative Star */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        style={{
          width: "60px",
          height: "60px",
          marginBottom: "0.5rem",
        }}
      >
        <svg viewBox="0 0 100 100" fill="#ffd700">
          <polygon points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" />
        </svg>
      </motion.div>

      {/* Conclusion Text */}
      {data.conclusion && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            maxWidth: "750px",
            textAlign: "center",
            padding: "2rem 2.5rem",
            background:
              "linear-gradient(135deg, rgba(165,28,48,0.1) 0%, rgba(255,215,0,0.05) 100%)",
            borderRadius: "16px",
            border: "1px solid rgba(255,215,0,0.2)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Quote marks */}
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "20px",
              fontSize: "4rem",
              color: "rgba(255,215,0,0.15)",
              fontFamily: "Georgia, serif",
              lineHeight: 1,
            }}
          >
            "
          </span>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#ddd",
              lineHeight: 1.9,
              margin: 0,
              position: "relative",
              zIndex: 1,
            }}
          >
            {data.conclusion}
          </p>
          <span
            style={{
              position: "absolute",
              bottom: "0px",
              right: "20px",
              fontSize: "4rem",
              color: "rgba(255,215,0,0.15)",
              fontFamily: "Georgia, serif",
              lineHeight: 1,
            }}
          >
            "
          </span>
        </motion.div>
      )}

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {/* Button 1: AI Usage */}
        <motion.a
          href="https://docs.google.com/document/d/1FI9_4EHWlMbEdcIy3QxJvCKklPveIRJSFRVxg-FGlHs/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(165, 28, 48, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "0.9rem 1.8rem",
            background: "linear-gradient(135deg, #a51c30 0%, #c41e3a 100%)",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "50px",
            fontSize: "0.95rem",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(165, 28, 48, 0.3)",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
            <circle cx="8" cy="14" r="1" fill="currentColor" />
            <circle cx="16" cy="14" r="1" fill="currentColor" />
          </svg>
          AI Usage
        </motion.a>

        {/* Button 2: Đặt câu hỏi */}
        <motion.a
          href="https://padlet.com/quanlvse182728/remake-of-my-radiant-padlet-wnxsy9943afjqqz6"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255,215,0,0.1)",
            borderColor: "#ffd700",
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "0.9rem 1.8rem",
            background: "transparent",
            color: "#ffd700",
            textDecoration: "none",
            borderRadius: "50px",
            fontSize: "0.95rem",
            fontWeight: 500,
            border: "1px solid rgba(255,215,0,0.5)",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          Đặt câu hỏi
        </motion.a>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          width: "200px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #444, transparent)",
          marginTop: "1rem",
        }}
      />

      {/* Credit */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{
          color: "#666",
          fontSize: "0.8rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
        }}
      >
        <span>© 2025 - Bài thuyết trình Tư tưởng Hồ Chí Minh</span>
        <span style={{ color: "#555", fontSize: "0.75rem" }}>
          Nhóm thực hiện: Nhóm 5
        </span>
      </motion.div>
    </div>
  );
};
