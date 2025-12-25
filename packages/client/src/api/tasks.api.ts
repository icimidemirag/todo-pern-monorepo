import type { Task } from '../types/task';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getTasks = async (completed?: boolean): Promise<Task[]> => {
  const query = completed !== undefined ? `?completed=${completed}` : '';
  const res = await fetch(`${BASE_URL}/tasks${query}`);
  if (!res.ok) throw new Error('Tasks could not be fetched');
  return res.json();
};

export const createTask = async (title: string): Promise<Task> => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error('Task could not be created');
  return res.json();
};

export const toggleComplete = async (id: number, completed: boolean): Promise<Task> => {
  const endpoint = completed ? 'undo' : 'complete';
  const res = await fetch(`${BASE_URL}/tasks/${id}/${endpoint}`, { method: 'PATCH' });
  if (!res.ok) throw new Error('Task could not be updated');
  return res.json();
};

export const deleteTask = async (id: number): Promise<void> => {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Task could not be deleted');
};

export const updateTask = async (id: number, title: string): Promise<Task> => {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error('Task could not be updated');
  return res.json();
};
