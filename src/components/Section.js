import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';


function Section({ section, onSectionOrderChange, index }) {
    return (
      <Draggable draggableId={section.title} index={index}>
        {(provided) => (
          <div
            className="section"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item.position} at {item.company} ({item.startDate} - {item.endDate})
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Draggable>
    );
  }
  

export default Section;
