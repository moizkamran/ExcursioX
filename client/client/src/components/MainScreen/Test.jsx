import { DndContext, closestCenter} from "@dnd-kit/core";
import { Box } from "@mantine/core";
import { useState } from "react";
import { Testdata } from "./Testdata";
import {
  restrictToHorizontalAxis,
} from '@dnd-kit/modifiers';

import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

function Test() {
  const [languages, setLanguages] = useState([
    "Visas",
    "Booking",
    "Passengers",
    "flights",
  ]);

  return (
    <DndContext 
      collisionDetection={closestCenter} 
      onDragEnd={handleDragEnd}
      modifiers={[restrictToHorizontalAxis]}
      >
      <Box
        style={{
          marginTop: "30px",
          width: "auto",
        }}
      >
        <SortableContext
          items={languages}
          strategy={horizontalListSortingStrategy}
          
        >
          {/* We need components that use the useSortable hook */}
          {languages.map((language) => (
            <Testdata key={language} id={language} />
          ))}
        </SortableContext>
      </Box>
    </DndContext>
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if (active.id !== over.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
}

export default Test;
