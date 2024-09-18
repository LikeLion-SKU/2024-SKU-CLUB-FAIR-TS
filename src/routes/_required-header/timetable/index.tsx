import { createFileRoute } from '@tanstack/react-router';
import TimeTable from '../../../components/timetable/TimeTable';

export const Route = createFileRoute('/_required-header/timetable/')({
  component: () => <TimeTablePage />,
});

function TimeTablePage() {
  return (
    <main className="pb-[20px]">
      <h1 className="text-center text-[36px] my-[50px]">MARCH 27</h1>
      <TimeTable />
    </main>
  );
}
