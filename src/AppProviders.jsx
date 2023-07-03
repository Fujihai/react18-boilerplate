import { BrowserRouter } from 'react-router-dom';

export function AppProviders({ children }) {
	return <BrowserRouter>{children}</BrowserRouter>;
}
