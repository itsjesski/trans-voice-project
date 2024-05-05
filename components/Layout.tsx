import { motion } from "framer-motion";
import Nav from "./Nav";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="leading-normal tracking-normal text-indigo-400 min-h-screen"
    >
      <div className="h-full">
        <Nav />
      </div>
      {children}
    </motion.div>
  );
};
