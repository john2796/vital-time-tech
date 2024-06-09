"use client";

import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import LocationCard from "./LocationCard";
import DraggingCard from "./DraggingCard";

const locations_dummy = [
  {
    id: "0",
    image:
      "https://plus.unsplash.com/premium_photo-1668883189361-9c754861dbd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjdG9sYW5kJTIwaXNsYW5kfGVufDB8fDB8fHww",
    title: "Scotland Island",
    subtitle: "Sydney, Australia",
  },
  {
    id: "1",
    image:
      "https://plus.unsplash.com/premium_photo-1668883189361-9c754861dbd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjdG9sYW5kJTIwaXNsYW5kfGVufDB8fDB8fHww",
    title: "The Charles Grand Brasserie & Bar",
    subtitle: "Sydney, Australia",
  },
  {
    id: "2",
    image:
      "https://plus.unsplash.com/premium_photo-1668883189361-9c754861dbd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjdG9sYW5kJTIwaXNsYW5kfGVufDB8fDB8fHww",
    title: "Bridge Climb",
    subtitle: "Dolor, Sit amet",
  },
  {
    id: "3",
    image:
      "https://plus.unsplash.com/premium_photo-1668883189361-9c754861dbd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjdG9sYW5kJTIwaXNsYW5kfGVufDB8fDB8fHww",
    title: "Scotland Island",
    subtitle: "Sydney, Australia",
  },
  {
    id: "4",
    image:
      "https://plus.unsplash.com/premium_photo-1668883189361-9c754861dbd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjdG9sYW5kJTIwaXNsYW5kfGVufDB8fDB8fHww",
    title: "Clam Bar",
    subtitle: "Etcetera veni, Vidi vici",
  },
  {
    id: "5",
    image:
      "https://plus.unsplash.com/premium_photo-1668883189361-9c754861dbd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjdG9sYW5kJTIwaXNsYW5kfGVufDB8fDB8fHww",
    title: "Vivid Festival",
    subtitle: "Sydney, Australia",
  },
];

const DraggableList = () => {
  const [listItems, setListItems] = useState(locations_dummy);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newList = [...listItems];
    const [removed] = newList.splice(result.source.index, 1);
    newList.splice(result.destination.index, 0, removed);
    setListItems(newList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="list">
        {(dropProvided) => (
          <div ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
            {listItems.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(dragProvided, dragSnapshot) => (
                  <div
                    ref={dragProvided.innerRef}
                    {...dragProvided.draggableProps}
                    {...dragProvided.dragHandleProps}
                    style={{
                      ...dragProvided.draggableProps.style,
                    }}
                  >
                    {dragSnapshot.isDragging ? (
                      <DraggingCard location={item} />
                    ) : (
                      <LocationCard location={item} />
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {dropProvided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
