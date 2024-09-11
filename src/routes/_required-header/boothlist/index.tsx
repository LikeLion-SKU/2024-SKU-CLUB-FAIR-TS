import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_required-header/boothlist/')({
  component: () => <div>boothlist</div>,
});
