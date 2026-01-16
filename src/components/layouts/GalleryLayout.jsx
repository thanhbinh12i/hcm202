import React from 'react';
import { motion } from 'framer-motion';

export const GalleryLayout = ({ items, setActiveItem }) => {
    return (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    layoutId={`item-${item.id}`}
                    onClick={() => setActiveItem(item)} // Also click for mobile/explicit
                    onMouseEnter={() => setActiveItem(item)}
                    initial={{ opacity: 0.8, scale: 1 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    style={{
                        position: 'relative',
                        width: '320px',
                        height: '460px',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #333'
                    }}
                >
                    <motion.img
                        layoutId={`img-${item.id}`}
                        src={item.image}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                    />
                    <motion.div
                        layoutId={`text-container-${item.id}`}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            padding: '10px',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                        }}
                    >
                        <motion.h3 layoutId={`title-${item.id}`} style={{ fontSize: '1rem', color: '#fff', margin: 0 }}>
                            {item.title}
                        </motion.h3>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};
