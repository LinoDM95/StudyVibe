import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
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
  const [selectedDifficulty, setSelectedDifficulty] = useState<number>();

  const [showAll, setShowAll] = useState(false);

  const allItems = React.Children.toArray(children);

  const filteredItems = selectedDifficulty
    ? allItems.filter((child) => {
        if (React.isValidElement(child)) {
          const element = child as React.ReactElement<{ difficulty?: number }>;
          return element.props.difficulty === selectedDifficulty;
        }
        return false;
      })
    : allItems;

  const visibleItems = showAll
    ? filteredItems
    : filteredItems.slice(0, itemsPerPage);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="font-intertight text-2xl md:text-3xl">{title}</h2>

        <div className="flex flex-wrap gap-2">
          <BtnToggle
            label="Grundlagen"
            onClick={() =>
              setSelectedDifficulty(selectedDifficulty === 1 ? undefined : 1)
            }
            isActiveEffect={selectedDifficulty === 1}
          />
          <BtnToggle
            label="Fortgeschritten"
            onClick={() =>
              setSelectedDifficulty(selectedDifficulty === 2 ? undefined : 2)
            }
            isActiveEffect={selectedDifficulty === 2}
          />
          <BtnToggle
            label="Experte"
            onClick={() =>
              setSelectedDifficulty(selectedDifficulty === 3 ? undefined : 3)
            }
            isActiveEffect={selectedDifficulty === 3}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleItems.map((child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="col-span-1 row-span-1"
          >
            {child}
          </motion.div>
        ))}
      </div>

      {filteredItems.length > itemsPerPage && (
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
