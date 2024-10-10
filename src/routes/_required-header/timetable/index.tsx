import { createFileRoute } from '@tanstack/react-router';
import loadFailure from '../../../api/loadFailure';

export const Route = createFileRoute('/_required-header/timetable/')({
  loader: async () => await loadFailure(),
  pendingComponent: () => <p>로딩중</p>,
  errorComponent: ({ error }) => <p>{error.message}</p>,
});
