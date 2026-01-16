import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const TimelineLayout = ({ items }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    // Grid placement configuration for 2-1-2 layout
    const getGridStyle = (index) => {
        switch (index) {
            case 0: return { gridColumn: '1', gridRow: '1' }; // Top Left
            case 1: return { gridColumn: '3', gridRow: '1' }; // Top Right
            case 2: return { gridColumn: '2', gridRow: '2', transform: 'scale(1.1)', zIndex: 5 }; // Center
            case 3: return { gridColumn: '1', gridRow: '3' }; // Bottom Left
            case 4: return { gridColumn: '3', gridRow: '3' }; // Bottom Right
            default: return {};
        }
    };

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%', // Use full content area
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            {/* 2-1-2 Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.4fr 1fr',
                gap: '1.5rem',
                width: '90vw',
                maxWidth: '1200px',
                position: 'relative',
                zIndex: 1
            }}>
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{
                            ...getGridStyle(index),
                            backgroundColor: hoveredItem && hoveredItem.id !== item.id ? '#111' : '#222',
                            border: hoveredItem && hoveredItem.id === item.id ? '1px solid #fff' : '1px solid #444',
                            borderRadius: '8px',
                            padding: '1.2rem', // Reduced padding
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            cursor: 'default',
                            opacity: hoveredItem && hoveredItem.id !== item.id ? 0.3 : 1,
                            transition: 'all 0.3s ease',
                            height: '130px', // Compact height as requested
                            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.1rem', color: '#fff', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {item.title}
                        </h3>
                        <div style={{ marginTop: '8px', opacity: 0.5, fontSize: '0.8rem' }}>+</div>
                    </motion.div>
                ))}
            </div>

            {/* Portal to Body for Root-Level Overlay */}
            {createPortal(
                <AnimatePresence>
                    {hoveredItem && (
                        <>
                            {/* Fullscreen Backdrop (Dim + Blur) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                style={{
                                    position: 'fixed',
                                    inset: 0,
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    backdropFilter: 'blur(8px)',
                                    zIndex: 9998,
                                    pointerEvents: 'none'
                                }}
                            />

                            {/* Museum Display Popup */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.96, x: '-50%', y: '-50%' }}
                                animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                                exit={{ opacity: 0, scale: 0.96, x: '-50%', y: '-50%' }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                style={{
                                    position: 'fixed',
                                    top: '50%',
                                    left: '50%',
                                    // transform handled by x/y for center stability
                                    width: 'min(70vw, 900px)',
                                    maxHeight: '80vh',
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #333',
                                    borderRadius: '16px',
                                    zIndex: 9999,
                                    pointerEvents: 'none',
                                    boxShadow: '0 30px 100px rgba(0,0,0,0.9)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Top: Image (Vertical Layout) */}
                                <div style={{
                                    width: '100%',
                                    height: '50%',
                                    minHeight: '280px',
                                    maxHeight: '400px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    backgroundColor: '#000'
                                }}>
                                    <img
                                        src={hoveredItem.image}
                                        alt={hoveredItem.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* Subtle gradient overlay to blend */}
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #1a1a1a, transparent 20%)' }} />
                                </div>

                                {/* Bottom: Content Area */}
                                <div style={{
                                    padding: '2rem 3rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.2rem',
                                    flex: 1,
                                    backgroundColor: '#1a1a1a'
                                }}>
                                    <h2 style={{
                                        fontSize: '2rem',
                                        color: '#fff',
                                        margin: 0,
                                        lineHeight: 1.2,
                                        fontWeight: 600,
                                        borderBottom: '1px solid #333',
                                        paddingBottom: '1rem'
                                    }}>
                                        {hoveredItem.title}
                                    </h2>

                                    {/* Achievement Detail */}
                                    {hoveredItem.achievement && (
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <span style={{ color: '#4caf50', fontSize: '1.3rem' }}>✔</span>
                                            <div>
                                                <strong style={{
                                                    color: '#4caf50',
                                                    fontSize: '0.85rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    display: 'block',
                                                    marginBottom: '4px'
                                                }}>THÀNH TỰU</strong>
                                                <p style={{
                                                    color: '#ddd',
                                                    margin: 0,
                                                    fontSize: '1rem',
                                                    lineHeight: 1.5
                                                }}>{hoveredItem.achievement}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Challenge Detail */}
                                    {hoveredItem.challenge && (
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <span style={{ color: '#ff9800', fontSize: '1.3rem' }}>⚠</span>
                                            <div>
                                                <strong style={{
                                                    color: '#ff9800',
                                                    fontSize: '0.85rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    display: 'block',
                                                    marginBottom: '4px'
                                                }}>THÁCH THỨC</strong>
                                                <p style={{
                                                    color: '#ccc',
                                                    margin: 0,
                                                    fontSize: '1rem',
                                                    lineHeight: 1.5
                                                }}>{hoveredItem.challenge}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}

        </div>
    );
};
