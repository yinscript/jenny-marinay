import { motion } from "framer-motion";

const MotionWrapper = ({
  children,
  variants,
  className = "",
  delay = 0,
  once = true,
  ...rest
}) => {
  const finalVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: { ...variants.visible.transition, delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      variants={finalVariants}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
