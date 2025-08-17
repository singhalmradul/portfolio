import { usePortfolioData } from './store/portfolio/use-portfolio';
import HomePage from './routes/home-page/home-page.component';
import Spinner from './components/shared/spinner/spinner.component';
import { errorContainer, errorTitle, errorMessage, retryButton } from './app.css';

const App = () => {
	const { isLoading, loadingMessage, error } = usePortfolioData();

	if (isLoading) {
		return <Spinner message={loadingMessage || 'Loading portfolio...'} />;
	}

	if (error) {
		return (
			<div className={errorContainer}>
				<h2 className={errorTitle}>Error Loading Portfolio</h2>
				<p className={errorMessage}>{error}</p>
				<button
					className={retryButton}
					onClick={() => window.location.reload()}
				>
					Retry
				</button>
			</div>
		);
	}

	return <HomePage />;
};

export default App;
