import { Button, ButtonGroup, Box } from '@mui/material';

type Filter = 'all' | 'active' | 'completed';

interface Props {
  value: Filter;
  onChange: (f: Filter) => void;
}

export function TaskFilter({ value, onChange }: Props) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <ButtonGroup variant="outlined" color="primary">
        <Button disabled={value === 'all'} onClick={() => onChange('all')}>
          All
        </Button>
        <Button disabled={value === 'active'} onClick={() => onChange('active')}>
          Active
        </Button>
        <Button disabled={value === 'completed'} onClick={() => onChange('completed')}>
          Completed
        </Button>
      </ButtonGroup>
    </Box>
  );
}
