import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const NewsPage = lazy(() => import('./features/news/routes/NewsPage'));
const NotFoundPage = lazy(() => import('./features/errors/routes/NotFoundPage'));

export function AppRoutes() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route index element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
