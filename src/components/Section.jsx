/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, useTransform, useMotionTemplate } from "framer-motion";
import { GalleryLayout } from "./layouts/GalleryLayout";
import { PortalLayout } from "./layouts/PortalLayout";
import { SlabLayout } from "./layouts/SlabLayout";
import { TimelineLayout } from "./layouts/TimelineLayout";
import { SingleLayout } from "./layouts/SingleLayout";
import { VideoLayout } from "./layouts/VideoLayout";
import { OutroLayout } from "./layouts/OutroLayout"; // NEW
import { FocusPanel } from "./FocusPanel";

export const Section = ({ data, index, scrollProgress, setLocked }) => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    setLocked(!!activeItem);
  }, [activeItem, setLocked]);

  const distance = useTransform(scrollProgress, (v) => index - v);
  const scale = useTransform(distance, [-1, 0, 1, 2], [1.5, 1, 0.6, 0.4]);
  const opacity = useTransform(
    distance,
    [-0.75, -0.5, 0, 0.5, 1],
    [0, 0, 1, 0.5, 0],
  );
  const blurValue = useTransform(distance, [-1, 0, 1, 2], [20, 0, 10, 20]);
  const brightness = useTransform(distance, [-1, 0, 1, 2], [0.5, 1, 0.6, 0.3]);
  const filter = useMotionTemplate`blur(${blurValue}px) brightness(${brightness})`;
  const zIndex = 100 - index;
  const contentPointerEvents = useTransform(distance, (v) =>
    v > -0.6 && v < 0.6 ? "auto" : "none",
  );

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
      case "single":
        return (
          <SingleLayout items={data.items} setActiveItem={setActiveItem} />
        );
      case "video":
        return <VideoLayout items={data.items} />;
      case "outro":
        return <OutroLayout data={data} />;
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
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        scale,
        opacity,
        filter,
        zIndex,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "180px",
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

      <motion.div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: contentPointerEvents,
          width: "100%",
          paddingBottom: "40px",
        }}
      >
        {renderLayout()}
      </motion.div>

      <FocusPanel
        key="panel"
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </motion.section>
  );
};
