import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";

interface AnimationVisibleProps {
  children: React.ReactNode;
  isOpen: boolean;
  maxHeight?: string;
  id: number | string;
  className?: string;
}

export const AnimationVisible: React.FC<AnimationVisibleProps> = ({
  children,
  isOpen,
  maxHeight = "80vh",
  id,
  className = "",
}) => {
  const containerVariants = {
    closed: { height: 0, opacity: 0 },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
  };

  const contentVariants = {
    closed: { opacity: 0, y: -10 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key={id}
          initial="closed"
          animate="open"
          exit="closed"
          variants={containerVariants}
          className={`overflow-hidden ${className}`}
        >
          <motion.div
            variants={contentVariants}
            className={`overflow-y-auto`}
            style={{ maxHeight }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};