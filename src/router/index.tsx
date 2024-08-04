import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import Layout from '../layout/Layout';

const finalRoutes = routes.map(route => ({
	...route,
	element: <Layout>{route.element}</Layout>,
}));

const router = createBrowserRouter(finalRoutes);

export default router;
