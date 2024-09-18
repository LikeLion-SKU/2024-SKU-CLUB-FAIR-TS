import { createFileRoute } from '@tanstack/react-router';
import TimeTable from '../../../components/timetable/TimeTable';

export const Route = createFileRoute('/_required-header/timetable/')({
  component: () => <TimeTablePage />,
});

function TimeTablePage() {
  return (
    <main>
      <TimeTable />
    </main>
  );
}
