export const tasksData = [
  {
    id: '1',
    title: 'Первая',
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    completed: true,
  },
  {
    id: '2',
    title: 'Вторая',
    completed: false,
    subtasks: [
      {
        id: '2.1',
        title: 'Вторая-один',
        completed: true,
      },
      {
        id: '2.2',
        title: 'Вторая-два',
        completed: false,
        subtasks: [
          {
            id: '2.2.1',
            title: 'Вторая-два-один',
            completed: true,
          },
          {
            id: '2.2.2',
            title: 'Вторая-два-два',
            completed: false,
          },
        ],
      },
    ],
  },
]
