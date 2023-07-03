import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const FakeNewsPage = lazy(() =>
	import('./features/fake-news/routes/FakeNewsPage')
);

export function AppRoutes() {
	return (
		<Suspense fallback={<div>loading...</div>}>
			<Routes>
				<Route path="/" element={<FakeNewsPage />} />
			</Routes>
		</Suspense>
	);
}
