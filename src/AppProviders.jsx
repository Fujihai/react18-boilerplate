import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { request } from './lib/request';
import { GlobalStyles } from './GlobalStyles';
import ErrorFallback from './components/ErrorFallback';

export function AppProviders({ children }) {
  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <SWRConfig value={{ fetcher: request.get }}>
        <BrowserRouter>{children}</BrowserRouter>
        <GlobalStyles />
      </SWRConfig>
    </ErrorBoundary>
  );
}
