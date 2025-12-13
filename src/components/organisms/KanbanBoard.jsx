import React from 'react';
import TaskCard from './TaskCard';
import Button from '../atoms/Button';

const KanbanBoard = ({ columns }) => {
  return (
    <div className="flex space-x-4">
      {columns.map(column => (
        <div key={column.title} className="bg-gray-100 dark:bg-gray-800 rounded-lg w-1/3 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold">{column.title}</h2>
            <Button className="text-gray-400 hover:text-gray-600">+</Button>
          </div>
          <div className="space-y-4">
            {column.tasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
