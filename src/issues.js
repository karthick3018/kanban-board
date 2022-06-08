import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import user1 from './user1.jpeg';
import user2 from './user2.jpeg';
import './App.css';

const itemsFromBackend = [
  {
    id: uuid(),
    content: "First task",
    type: "frontend",
    sprint: "sprint1",
    assignee: user1,
  },
  {
    id: uuid(),
    content: "Second task",
    type: "frontend",
    sprint: "sprint1",
    assignee: user1,
  },
  {
    id: uuid(),
    content: "Third task",
    type: "backend",
    sprint: "sprint1",
    assignee: user2,
  },
  {
    id: uuid(),
    content: "Fourth task",
    type: "frontend",
    sprint: "sprint1",
    assignee: user1,
  },
  {
    id: uuid(),
    content: "Fifth task",
    type: "backend",
    sprint: "sprint1",
    assignee: user2,
  },
];

const availableColumns = {
  [uuid()]: {
    name: "Todo",
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: "Doing",
    items: [],
  },
  [uuid()]: {
    name: "Completed",
    items: [],
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function IssuesComponent () {
  const [columns, setColumns] = useState(availableColumns);
  return (
    <div className="draggable-wrapper">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object?.entries(columns)?.map(([columnId, column], index) => {
          return (
            <div className="draggable-column" key={columnId}>
              <h2>{column?.name}</h2>
              <div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="draggable-area"
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "#F0F0F0",
                          minHeight: 500,
                        }}
                      >
                        {column?.items?.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="draggable-item"
                                    style={{
                                      backgroundColor: snapshot.isDragging
                                        ? "#F0F0F0"
                                        : "#FFFFFF",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    <div>
                                      <div>{item?.content}</div>
                                      <div className="draggable-item-batch">
                                        <span className={item?.type}>
                                          {item?.type}
                                        </span>
                                        <span className={item?.sprint}>
                                          {item?.sprint}
                                        </span>
                                      </div>
                                    </div>

                                    <div>
                                      <figure>
                                        <img
                                          src={item?.assignee}
                                          alt="assignee"
                                        />
                                      </figure>
                                    </div>
                                    
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided?.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default IssuesComponent;
