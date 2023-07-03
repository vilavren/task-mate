export const tasksData = [
  {
    id: '1',
    title: 'Первая',
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    completed: true,
    subtasks: [],
  },
  {
    id: '2',
    title: 'Вторая',
    text: '',
    completed: false,
    subtasks: [
      {
        id: '2.1',
        title: 'Вторая-один',
        text: '',
        completed: true,
        subtasks: [],
      },
      {
        id: '2.2',
        title: 'Вторая-два',
        text: '',
        completed: false,
        subtasks: [
          {
            id: '2.2.1',
            title: 'Вторая-два-один',
            text: '',
            completed: true,
            subtasks: [],
          },
          {
            id: '2.2.2',
            title: 'Вторая-два-два',
            text: '',
            completed: false,
            subtasks: [],
          },
        ],
      },
    ],
  },
]
