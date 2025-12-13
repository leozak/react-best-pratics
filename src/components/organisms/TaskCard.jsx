import React from 'react';
import Tag from '../atoms/Tag';
import ProgressBar from '../atoms/ProgressBar';
import AvatarGroup from '../molecules/AvatarGroup';
import Button from '../atoms/Button';

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-xl">
      {task.image && <img src={task.image} alt={task.title} className="rounded-lg mb-4" />}
      <div className="flex space-x-2 mb-2">
          {task.tags && task.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
          ))}
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">{task.title}</h3>
        <Button className="text-gray-400 hover:text-gray-600">...</Button>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{task.subTitle}</p>
      {task.progress !== undefined && (
        <div className="flex items-center mb-4">
            <span className="text-sm mr-2">Progress</span>
            <ProgressBar progress={task.progress} />
            <span className="text-sm ml-2">{task.progress}/10</span>
        </div>
      )}
      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <span className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-md">{task.date}</span>
        <div className="flex items-center space-x-2">
          {task.comments && <span>💬 {task.comments}</span>}
          {task.attachments && <span>📎 {task.attachments}</span>}
          <AvatarGroup users={task.users} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
