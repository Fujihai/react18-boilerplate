import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import ErrorFallback from './components/ErrorFallback';

export function AppProviders({ children }) {
	return (
		<ErrorBoundary fallbackRender={ErrorFallback}>
			<BrowserRouter>{children}</BrowserRouter>
			<GlobalStyles />
		</ErrorBoundary>
	)
}
