import { motion } from "framer-motion";
import Nav from "./Nav";

export const Layout: React.FC<{ key: string; children: React.ReactNode }> = ({
  key,
  children,
}) => {
  return (
    <div className="leading-normal tracking-normal text-indigo-400 min-h-screen">
      <div className="h-full">
        <Nav />
      </div>
      <motion.div
        key={key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.15 } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
