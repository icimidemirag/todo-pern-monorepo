import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface Props {
  onAdd: (title: string) => void;
}

export function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1, mb: 2 }}>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
}
