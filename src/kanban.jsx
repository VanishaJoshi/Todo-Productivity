import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from './Column';

// Sample data
const initialData = {
  columns: {
    'todo': {
      id: 'todo',
      title: 'To Do',
      items: [{ id: '1', content: 'Task 1', priority: 'high' }, { id: '2', content: 'Task 2', priority: 'medium' }],
    },
    'in-progress': {
      id: 'in-progress',
      title: 'In Progress',
      items: [{ id: '3', content: 'Task 3', priority: 'low' }],
    },
    'done': {
      id: 'done',
      title: 'Done',
      items: [{ id: '4', content: 'Task 4', priority: 'high' }],
    },
  },
  columnOrder: ['todo', 'in-progress', 'done'],
};

function KanbanBoard() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId) {
      const column = data.columns[source.droppableId];
      const items = Array.from(column.items);
      items.splice(source.index, 1);
      items.splice(destination.index, 0, { id: draggableId, content: draggableId });

      const newColumn = {
        ...column,
        items,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newState);
      return;
    }

    const sourceColumn = data.columns[source.droppableId];
    const destColumn = data.columns[destination.droppableId];

    const sourceItems = Array.from(sourceColumn.items);
    const destItems = Array.from(destColumn.items);

    const [movedItem] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, movedItem);

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [sourceColumn.id]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destColumn.id]: {
          ...destColumn,
          items: destItems,
        },
      },
    };

    setData(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          return (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided) => (
                <Column
                  column={column}
                  innerRef={provided.innerRef}
                  droppableProps={provided.droppableProps}
                >
                  {provided.placeholder}
                </Column>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard;
