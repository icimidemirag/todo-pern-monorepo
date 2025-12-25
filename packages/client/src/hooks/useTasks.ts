import { useState, useCallback, useEffect } from 'react';
import type { Task } from '../types/task';
import * as api from '../api/tasks.api';

type Filter = 'all' | 'active' | 'completed';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>('all');

  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (filter === 'completed') {
        setTasks(await api.getTasks(true));
      } else if (filter === 'active') {
        setTasks(await api.getTasks(false));
      } else {
        setTasks(await api.getTasks());
      }
    } catch (e) {
      setError('Failed to load tasks: ' + e);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const addTask = useCallback(
    async (title: string) => {
      await api.createTask(title);
      loadTasks();
    },
    [loadTasks],
  );

  const toggleTask = useCallback(
    async (task: Task) => {
      await api.toggleComplete(task.id, task.completed);
      loadTasks();
    },
    [loadTasks],
  );

  const removeTask = useCallback(
    async (id: number) => {
      await api.deleteTask(id);
      loadTasks();
    },
    [loadTasks],
  );

  return {
    tasks,
    loading,
    error,
    filter,
    setFilter,
    addTask,
    toggleTask,
    removeTask,
    loadTasks,
  };
}
