import React from 'react';
import ProgressBar from '../atoms/ProgressBar';

const Statistics = ({ columns }) => {
  const totalTasks = columns.reduce((acc, column) => acc + column.tasks.length, 0);
  const todoTasks = columns.find(c => c.title.startsWith('A fazer'))?.tasks.length || 0;
  const inProgressTasks = columns.find(c => c.title.startsWith('Em progresso'))?.tasks.length || 0;
  const doneTasks = columns.find(c => c.title.startsWith('Concluído'))?.tasks.length || 0;

  const allTasks = columns.flatMap(column => column.tasks);
  const overallProgress = allTasks.length > 0
    ? Math.round(
        allTasks
          .map(task => task.progress)
          .reduce((acc, progress) => acc + progress, 0) / allTasks.length
      )
    : 0;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Estatísticas do Projeto</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">{totalTasks}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Total de Tarefas</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-yellow-500">{todoTasks}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">A Fazer</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-blue-500">{inProgressTasks}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Em Progresso</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-green-500">{doneTasks}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Concluídas</p>
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-2">Progresso Geral</h3>
        <div className="flex items-center">
          <ProgressBar progress={overallProgress} />
          <span className="ml-2 font-bold">{overallProgress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
