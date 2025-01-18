import { motion } from 'framer-motion';

const AnimatedSection = ({ textArray, isInView }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2, // Intervalle entre chaque ligne
          },
        },
        hidden: { opacity: 0 },
      }}
    >
      {textArray.map((text, index) => (
        <motion.div
          key={index}
          variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
          className="text-lg leading-relaxed mb-4"
        >
          {text}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedSection;
