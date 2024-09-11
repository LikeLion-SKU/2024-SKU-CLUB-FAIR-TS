import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_required-header/about/')({
  component: () => <div>aboutPage</div>,
});
