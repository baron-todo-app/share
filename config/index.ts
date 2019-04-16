export const entity = {
  todo: {
    title: {
      length: 10,
    },
    body: {
      length: 30,
    },
  },
};

export const dto = {
  task: {
    input: {
      title: {
        ...entity.todo.title,
      },
      body: {
        ...entity.todo.body,
      },
    },
  },
};
