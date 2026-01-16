import React, { useState, useEffect } from 'react';
import { motion, useTransform, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { PortalLayout } from './layouts/PortalLayout';
import { CoreFocusPanel } from './CoreFocusPanel';

export const SectionCoreContent = ({ data, index, scrollProgress, setLocked }) => {
    const [activeCard, setActiveCard] = useState(null);

    // Notify App to lock scroll when active
    useEffect(() => {
        setLocked(!!activeCard);
    }, [activeCard, setLocked]);

    const distance = useTransform(scrollProgress, (v) => index - v);

    const scale = useTransform(distance, [-1, 0, 1, 2], [1.5, 1, 0.6, 0.4]);
    const opacity = useTransform(distance, [-0.75, -0.5, 0, 0.5, 1], [0, 0, 1, 0.5, 0]);

    const blurValue = useTransform(distance, [-1, 0, 1, 2], [20, 0, 10, 20]);
    const brightness = useTransform(distance, [-1, 0, 1, 2], [0.5, 1, 0.6, 0.3]);

    const filter = useMotionTemplate`blur(${blurValue}px) brightness(${brightness})`;
    const zIndex = 100 - index;

    // Dynamically Toggle pointer events to prevent overlap blocking
    const contentPointerEvents = useTransform(distance, (v) => (v > -0.6 && v < 0.6) ? 'auto' : 'none');

    return (
        <motion.section
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                scale,
                opacity,
                filter,
                zIndex,
                pointerEvents: 'none',
                overflow: 'hidden'
            }}
        >
            {/* Stable Header Area - Does not scroll or move when content is hovered */}
            <div style={{
                height: '180px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                pointerEvents: 'auto',
                paddingTop: '40px',
                flexShrink: 0
            }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center', margin: 0 }}>
                    {data.title}
                </h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', textAlign: 'center', color: '#ccc', margin: '0.5rem 0' }}>
                    {data.description}
                </p>
            </div>

            <motion.div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: contentPointerEvents,
                    width: '100%',
                    paddingBottom: '40px'
                }}
            >
                {/* Strictly uses PortalLayout and passes local handler */}
                <PortalLayout items={data.items} setActiveItem={setActiveCard} />

            </motion.div>

            {/* Render CoreFocusPanel INTERNALLY, strictly isolated. Always rendered. */}
            <CoreFocusPanel
                key="core-panel"
                item={activeCard}
                onClose={() => setActiveCard(null)}
            />

        </motion.section>
    );
};
