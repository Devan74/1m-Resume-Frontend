import React from "react";
import Section from "./Section";
import { Draggable, Droppable } from 'react-beautiful-dnd';

function Resume({ data, onSectionOrderChange, selectedColor }) {
  return (
    <Droppable droppableId="sections" direction="vertical">
      {(provided) => (
        <div
          className="resume"
          style={{ backgroundColor: selectedColor }}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {data.sections.map((section, index) => (
            <Section
              key={index}
              section={section}
              onSectionOrderChange={onSectionOrderChange}
              index={index}
            />
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Resume;
