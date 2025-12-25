import { Router } from 'express';
import * as controller from '../controllers/task.controller';
import { asyncHandler } from '../middlewares/async.middleware';
import { validate } from '../middlewares/validate.middleware';
import { createTaskSchema, updateTaskSchema } from '../validations/task.validation';

const router = Router();

router.post('/tasks', validate(createTaskSchema), asyncHandler(controller.create));

router.get('/tasks', asyncHandler(controller.list));

router.put('/tasks/:id', validate(updateTaskSchema), asyncHandler(controller.update));

router.patch('/tasks/:id/complete', asyncHandler(controller.complete));

router.patch('/tasks/:id/undo', asyncHandler(controller.undo));

router.delete('/tasks/:id', asyncHandler(controller.remove));

export default router;
