import { motion } from "framer-motion";

 function Animation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}       
      whileInView={{ opacity: 1, y: 0 }}    
      transition={{ duration: 0.6 }}       
      viewport={{ once: false }}             
    >
      {children}
    </motion.div>
  );
}
export default Animation