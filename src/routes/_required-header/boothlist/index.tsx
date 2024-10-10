import { createFileRoute } from '@tanstack/react-router';
import loadSuccess from '../../../api/loadSuccess';

export const Route = createFileRoute('/_required-header/boothlist/')({
  loader: () => loadSuccess(),
  pendingComponent: () => <p>로딩중</p>,
});
