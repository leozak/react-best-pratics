import React from 'react';
import KanbanBoard from '../components/organisms/KanbanBoard';
import Statistics from '../components/organisms/Statistics';

const Home = () => {
  // Os dados das tarefas são agora geridos aqui para serem partilhados entre os componentes
  const columnsData = [
    { title: 'A fazer (4)', tasks: [
        { id: 1, title: 'Design new ui presentation', subTitle: 'Dribble marketing', progress: 70, date: '24 Aug 2022', comments: 7, attachments: 2, users: ['1', '2'], tags: ['Dribbble', 'Design'] },
        { id: 2, title: 'Add more ui/ux mockups', subTitle: 'Pinterest promotion', progress: 40, date: '25 Aug 2022', users: ['1', '2', '3'], tags: ['Pinterest', 'UI/UX'] },
        { id: 7, title: 'Design few mobile screens', subTitle: 'Dropbox mobile app', progress: 30, date: '26 Aug 2022', comments: 6, attachments: 4, users: ['1'], tags: ['Mobile', 'Dropbox'] },
    ]},
    { title: 'Em progresso (4)', tasks: [
        { id: 3, title: 'Design system update', subTitle: 'Oreo website project', progress: 30, date: '12 Nov 2022', users: ['1', '2', '3'], tags: ['Design System'], image: 'https://picsum.photos/seed/picsum/300/200' },
        { id: 4, title: 'Create brand guideline', subTitle: 'Oreo branding project', progress: 70, date: '13 Nov 2022', comments: 2, attachments: 13, users: ['1', '2'], tags: ['Branding'] },
        { id: 8, title: 'Create wireframe for ios app', subTitle: 'Oreo ios app project', progress: 40, date: '14 Nov 2022', users: ['1', '2'], tags: ['Wireframe', 'iOS'] },
    ]},
    { title: 'Concluído (3)', tasks: [
        { id: 5, title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: 100, date: '6 Jan 2022', comments: 1, attachments: 5, users: ['1'], tags: ['Marketing'] },
        { id: 6, title: 'Launch product promotion', subTitle: 'Kickstarter campaign', progress: 100, date: '7 Jan 2022', comments: 17, attachments: 3, users: ['1', '2', '3'], tags: ['Promotion', 'Kickstarter'] },
        { id: 9, title: 'Make twitter banner', subTitle: 'Twitter marketing', progress: 100, date: '8 Jan 2022', users: ['1', '2', '3'], tags: ['Twitter', 'Marketing'] },
    ]},
  ];

  return (
    <div className="p-4">
      <Statistics columns={columnsData} />
      <KanbanBoard columns={columnsData} />
    </div>
  );
};

export default Home;
