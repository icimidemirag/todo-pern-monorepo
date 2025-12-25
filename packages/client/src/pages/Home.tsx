import { useTasks } from '../hooks/useTasks';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { TaskFilter } from '../components/TaskFilter';
import * as api from '../api/tasks.api';
import { Paper, Typography, Box, CircularProgress, Alert } from '@mui/material';

export function Home() {
  const { tasks, loading, error, filter, setFilter, addTask, toggleTask, removeTask, loadTasks } =
    useTasks();

  const handleEdit = async (id: number, title: string) => {
    try {
      await api.updateTask(id, title);
      loadTasks();
    } catch (err) {
      console.error(err);
      alert('Task güncellenirken bir hata oluştu.');
    }
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f5f5f5',
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '90%',
          maxWidth: 600,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography variant="h4" component="h1" align="center">
          TODO App
        </Typography>

        <TaskForm onAdd={addTask} />

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TaskFilter value={filter} onChange={setFilter} />
        </Box>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        )}

        {error && <Alert severity="error">{error}</Alert>}

        {tasks.length === 0 && filter === 'all' ? (
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
            There's nothing to be done yet!
          </Typography>
        ) : (
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={removeTask} onEdit={handleEdit} />
        )}
      </Paper>
    </Box>
  );
}
