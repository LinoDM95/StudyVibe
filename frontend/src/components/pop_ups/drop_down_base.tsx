import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * DropDownBase Component
 * ========================
 * A reusable dropdown base component that smoothly appears from top to bottom.
 *
 * @prop {React.ReactNode} children - The content inside the dropdown.
 * @prop {boolean} openStatus - Determines whether the dropdown should be visible.
 * @prop {(isActive: boolean) => void} [onChange] - Optional callback that returns the current state.
 */

interface DropDownBaseProps {
  children?: React.ReactNode;
  openStatus: boolean;
  onChange?: (isActive: boolean) => void;
}

const DropDownBase: React.FC<DropDownBaseProps> = ({ children, openStatus, onChange }) => {
  // Local state to manage the dropdown visibility
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsActive(openStatus);
  }, [openStatus]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsActive(false);
        if (onChange) {
          onChange(false);
        }
      }
    }

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, onChange]);

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <motion.div
            ref={dropdownRef}
            className="absolute border border-gray-100 bg-studyvibe-color6 rounded-lg shadow-lg p-4 w-auto"
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}  
            exit={{ opacity: 0, y: -10 }}    
            transition={{ duration: 0.2, ease: "easeOut" }} 
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DropDownBase;
