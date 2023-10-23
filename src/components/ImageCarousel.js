import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            controls.start({ x: '-100%' });
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                controls.start({ x: '0' });
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [controls, images]);

    return (
        <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Image ${currentIndex}`}
            initial={{ x: '0' }}
            animate={controls}
            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 } }}
            sizes='{max-width:768px} 100vw,{max-width:1200px} 50vw,50vw'
        />
    );
};

export default ImageCarousel;
