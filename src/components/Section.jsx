/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  motion,
  useTransform,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";
import { GalleryLayout } from "./layouts/GalleryLayout";
import { PortalLayout } from "./layouts/PortalLayout"; // Fallback usage
import { SlabLayout } from "./layouts/SlabLayout";
import { TimelineLayout } from "./layouts/TimelineLayout";
import { FocusPanel } from "./FocusPanel";

export const Section = ({ data, index, scrollProgress, setLocked }) => {
  const [activeItem, setActiveItem] = useState(null);

  // Notify App to lock scroll when active
  useEffect(() => {
    setLocked(!!activeItem);
  }, [activeItem, setLocked]);

  // distance: Current index - Scroll position
  // If index=0, scroll=0 -> distance=0 (Active)
  // If index=1, scroll=0 -> distance=1 (In front, deeper in Z)
  // If index=0, scroll=1 -> distance=-1 (Behind camera)
  const distance = useTransform(scrollProgress, (v) => index - v);

  // Transform config
  // Range: [-1 (past), 0 (active), 1 (future), 2 (deep future)]

  const scale = useTransform(distance, [-1, 0, 1, 2], [1.5, 1, 0.6, 0.4]);
  const opacity = useTransform(
    distance,
    [-0.75, -0.5, 0, 0.5, 1],
    [0, 0, 1, 0.5, 0]
  );

  const blurValue = useTransform(distance, [-1, 0, 1, 2], [20, 0, 10, 20]);
  const brightness = useTransform(distance, [-1, 0, 1, 2], [0.5, 1, 0.6, 0.3]);

  const filter = useMotionTemplate`blur(${blurValue}px) brightness(${brightness})`;

  // Conditional visibility to improve performance
  const zIndex = 100 - index;

  // Dynamically Toggle pointer events to prevent overlap blocking
  const contentPointerEvents = useTransform(distance, (v) =>
    v > -0.6 && v < 0.6 ? "auto" : "none"
  );

  // Render sub-components based on layout type
  const renderLayout = () => {
    switch (data.layout) {
      case "gallery":
        return (
          <GalleryLayout items={data.items} setActiveItem={setActiveItem} />
        );
      case "portal":
        return (
          <PortalLayout items={data.items} setActiveItem={setActiveItem} />
        );
      case "slabs":
        return <SlabLayout items={data.items} setActiveItem={setActiveItem} />;
      case "timeline":
        return (
          <TimelineLayout items={data.items} setActiveItem={setActiveItem} />
        );
      default:
        return null;
    }
  };

  return (
    <motion.section
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh", // Force viewport height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // Start from top for stable header
        scale,
        opacity,
        filter,
        zIndex,
        pointerEvents: "none", // We will enable pointer events only when "close"
        overflow: "hidden", // Prevent any unwanted scrollbars
      }}
    >
      {/* Stable Header Area - Does not scroll or move when content is hovered */}
      <div
        style={{
          height: "180px", // Fixed height to stabilize
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          pointerEvents: "auto",
          paddingTop: "40px",
          flexShrink: 0,
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            textAlign: "center",
            margin: 0,
          }}
        >
          {data.title}
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            textAlign: "center",
            color: "#ccc",
            margin: "0.5rem 0",
          }}
        >
          {data.description}
        </p>
      </div>

      {/* Content Area - Expands to fill remaining space */}
      <motion.div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: contentPointerEvents,
          width: "100%",
          paddingBottom: "40px", // Padding at bottom to prevent floor-touching
        }}
      >
        {renderLayout()}
      </motion.div>

      {/* Internal Focus Panel - Always rendered to allow AnimatePresence inside to handle cleanup */}
      <FocusPanel
        key="panel"
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </motion.section>
  );
};
