import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "motion/react";

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="fixed inset-0 bg-black/50 z-90 flex md:hidden lg:hidden"
        >
          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.4,
            }}
            exit={{
              x: "100%",
            }}
            className="ml-auto w-3/4 max-w-sm h-full bg-card flex flex-col py-20 px-6 gap-10 relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-foreground"
              aria-label="Close sidebar"
            >
              <X size={30} />
            </button>
            <nav className="flex flex-col gap-8">
              <p
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection("home");
                }}
                className="text-foreground hover:text-muted transition text-2xl"
              >
                Home
              </p>
              <p
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection("templates");
                }}
                className="text-foreground hover:text-muted transition text-2xl"
              >
                Templates
              </p>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
