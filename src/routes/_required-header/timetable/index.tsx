import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_required-header/timetable/')({
  component: () => <div>timetable page</div>,
});
