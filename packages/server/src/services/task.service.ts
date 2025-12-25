import { prisma } from '../lib/prisma';

export const createTask = (title: string) => {
  return prisma.task.create({
    data: {
      title,
      assignee: process.env.TODO_USERNAME || 'Unknown',
      completed: false,
    },
  });
};

export const getTasks = (completed?: boolean) => {
  return prisma.task.findMany({
    where: completed !== undefined ? { completed } : {},
    orderBy: { createdAt: 'desc' },
  });
};

export const updateTask = (id: number, data: { title?: string; completed?: boolean }) => {
  return prisma.task.update({
    where: { id },
    data,
  });
};

export const markComplete = (id: number) => {
  return prisma.task.update({
    where: { id },
    data: { completed: true },
  });
};

export const markUndo = (id: number) => {
  return prisma.task.update({
    where: { id },
    data: { completed: false },
  });
};

export const deleteTask = (id: number) => {
  return prisma.task.delete({
    where: { id },
  });
};
