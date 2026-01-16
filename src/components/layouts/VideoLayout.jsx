/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

export const VideoLayout = ({ items }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const item = items[0];
  if (!item) return null;

  // Extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&]+)/
    );
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(item.videoUrl);

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
        gap: "2rem",
      }}
    >
      {/* Video Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "relative",
          width: "90vw",
          maxWidth: "900px",
          aspectRatio: "16/9",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          border: "1px solid #333",
          background: "#000",
        }}
      >
        {!isPlaying ? (
          // Thumbnail with Play Button
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.7)",
              }}
              onError={(e) => {
                e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }}
            />

            {/* Play Button Overlay */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "rgba(255, 0, 0, 0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(255, 0, 0, 0.4)",
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "15px solid transparent",
                  borderBottom: "15px solid transparent",
                  borderLeft: "25px solid white",
                  marginLeft: "5px",
                }}
              />
            </motion.div>

            {/* Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
              }}
            />

            {/* Video Title on Thumbnail */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  color: "#fff",
                  margin: 0,
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ) : (
          // YouTube Embed
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        )}
      </motion.div>

      {/* Video Description */}
      {item.description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            maxWidth: "700px",
            textAlign: "center",
            padding: "0 2rem",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              color: "#aaa",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {item.description}
          </p>
        </motion.div>
      )}
    </div>
  );
};
