import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BtnToggle from "../../buttons/btn_toggle";
import BtnPrimary from "../../buttons/btn_primary";

interface LearningPathGridProps {
  title: string;
  children: ReactNode;
  itemsPerPage?: number;
}

const LearningPathGrid: React.FC<LearningPathGridProps> = ({
  title,
  children,
  itemsPerPage = 6,
}) => {
  const [showAll, setShowAll] = useState(false);
  const items = Array.isArray(children) ? children : [children];
  const visibleItems = showAll ? items : items.slice(0, itemsPerPage);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="font-intertight text-2xl md:text-3xl">{title}</h2>

        <div className="flex flex-wrap gap-2">
          <BtnToggle
            label="Grundlagen"
            onClick={() => console.log("Grundlagen")}
          />
          <BtnToggle
            label="Fortgeschritten"
            onClick={() => console.log("Fortgeschritten")}
          />
          <BtnToggle label="Experte" onClick={() => console.log("Experte")} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="col-span-1 row-span-1"
          >
            {item}
          </motion.div>
        ))}
      </div>

      {items.length > itemsPerPage && (
        <div className="flex justify-center">
          <BtnPrimary
            label={showAll ? "Weniger anzeigen" : "Mehr anzeigen"}
            onClick={() => setShowAll(!showAll)}
          />
        </div>
      )}
    </div>
  );
};

export default LearningPathGrid;
