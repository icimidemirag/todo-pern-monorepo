import type { Task } from '../types/task';
import { Checkbox, IconButton, ListItem, ListItemText, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

export function TaskItem({ task, onToggle, onDelete, onEdit }: Props) {
  const handleEdit = () => {
    const newTitle = prompt('Görev adını düzenleyin:', task.title);
    if (newTitle && newTitle.trim() !== '') {
      onEdit(task.id, newTitle);
    }
  };

  return (
    <ListItem
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingY: 0.5,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          edge="start"
          checked={task.completed}
          tabIndex={-1}
          disableRipple
          onChange={() => onToggle(task)}
        />
        <ListItemText
          primary={task.title}
          secondary={`Assignee: ${task.assignee} | Created: ${task.createdAt} | Updated: ${task.updatedAt}`}
          sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        />
      </Box>
      <Box>
        <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
}
