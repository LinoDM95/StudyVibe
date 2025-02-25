import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import BtnToggle from "../../buttons/btn_toggle";
import BtnPrimary from "../../buttons/btn_primary";
/**
 * ! LearningPathGrid
 *
 * This React component serves as a grid for displaying learning paths.
 * It allows filtering elements by difficulty level and includes a "Show more" feature.
 *
 * @component
 * ? @example
 * ```tsx
 * <LearningPathGrid title="My Learning Path">
 *   <LearningModule difficulty={1} title="Programming Basics" />
 *   <LearningModule difficulty={2} title="Advanced Techniques" />
 *   <LearningModule difficulty={3} title="Expert Knowledge" />
 * </LearningPathGrid>
 * ```
 *
 * @param {string} title - The title of the grid.
 * @param {ReactNode} children - The contained learning modules or other components.
 * @param {number} [itemsPerPage=6] - The number of visible items per page (default: 6).
 *
 * ? @example
 * ```tsx
 * <LearningPathGrid title="JavaScript Learning Path" itemsPerPage={4}>
 *   <LearningModule difficulty={1} title="Basics" />
 *   <LearningModule difficulty={2} title="Async & Await" />
 *   <LearningModule difficulty={3} title="Performance Optimization" />
 * </LearningPathGrid>
 * ```
 *
 * ? @example
 * ```tsx
 * <LearningPathGrid title="Python for Beginners">
 *   <LearningModule difficulty={1} title="Syntax & Basics" />
 *   <LearningModule difficulty={2} title="OOP with Python" />
 *   <LearningModule difficulty={3} title="Data Analysis" />
 * </LearningPathGrid>
 * ```
 */
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
