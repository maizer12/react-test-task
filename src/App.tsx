import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import LoadingSpinner from './common/LoadingSpinner';

function App() {
	return (
		<Suspense fallback={<LoadingSpinner className='h-screen' />}>
			<RouterProvider router={router} />
		</Suspense>
	);
}

export default App;
