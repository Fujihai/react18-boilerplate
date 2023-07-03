import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import ErrorFallback from './components/ErrorFallback';

export function AppProviders({ children }) {
	return (
		<ErrorBoundary fallbackRender={ErrorFallback}>
			<BrowserRouter>{children}</BrowserRouter>
		</ErrorBoundary>
	)
}
