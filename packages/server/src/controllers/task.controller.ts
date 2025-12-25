import { Request, Response } from 'express';
import * as service from '../services/task.service';

export const create = async (req: Request, res: Response) => {
  const task = await service.createTask(req.body.title);
  res.status(201).json(task);
};

export const list = async (req: Request, res: Response) => {
  const completed = req.query.completed !== undefined ? req.query.completed === 'true' : undefined;

  const tasks = await service.getTasks(completed);
  res.json(tasks);
};

export const update = async (req: Request, res: Response) => {
  const task = await service.updateTask(Number(req.params.id), req.body);
  res.json(task);
};

export const complete = async (req: Request, res: Response) => {
  const task = await service.markComplete(Number(req.params.id));
  res.json(task);
};

export const undo = async (req: Request, res: Response) => {
  const task = await service.markUndo(Number(req.params.id));
  res.json(task);
};

export const remove = async (req: Request, res: Response) => {
  await service.deleteTask(Number(req.params.id));
  res.status(204).send();
};
