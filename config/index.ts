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
      body: {
        ...entity.todo.body,
      },
    },
  },
};
