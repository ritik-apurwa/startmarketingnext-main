"use client"

import { achievementData } from "@/public";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AchievementDataItem {
  label: string;
  value: string | number;
}

interface CountUpProps {
  end: string | number;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });

      const endValue = typeof end === "string" ? parseInt(end, 10) : end;
      let start = 0;
      const increment = endValue / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start > endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration, controls]);

  return (
    <motion.span ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls}>
      {count}
    </motion.span>
  );
};

const Counter: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, staggerChildren: 0.1 },
      });
    }
  }, [isInView, controls]);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          className="text-center mb-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            className="text-3xl font-bold mb-2"
          >
            Our Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            className="text-lg text-gray-600"
          >
            Discover our accomplishments over the years.
          </motion.p>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          id="achievementValues"
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {achievementData.map((item: AchievementDataItem) => (
            <motion.div
              key={item.label}
              className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-3xl font-bold mb-2">
                <CountUp end={item.value} />+
              </div>
              <h3 className="text-gray-600">{item.label}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Counter;
