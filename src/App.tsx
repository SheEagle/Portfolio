import { AppProvider } from '@/providers';
import { AppRoutes } from '@/routes';
import './i18n';

export function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
