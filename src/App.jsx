import './App.css';
import { AppRoutes } from './AppRoutes';
import { AppProviders } from './AppProviders';

function App() {
	return (
		<AppProviders>
			<AppRoutes />
		</AppProviders>
	);
}

export default App;
