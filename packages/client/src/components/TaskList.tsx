import type { Task } from '../types/task';
import { TaskItem } from './TaskItem';
import { List, Divider, Typography, Box } from '@mui/material';

interface Props {
  tasks: Task[];
  onToggle: (task: Task) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

export function TaskList({ tasks, onToggle, onDelete, onEdit }: Props) {
  if (tasks.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant="body1" color="text.secondary">
          No tasks available.
        </Typography>
      </Box>
    );
  }

  return (
    <List>
      {tasks.map((task, index) => (
        <div key={task.id}>
          <TaskItem task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
          {index < tasks.length - 1 && <Divider component="li" />}
        </div>
      ))}
    </List>
  );
}
