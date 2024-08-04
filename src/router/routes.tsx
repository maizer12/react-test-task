// routes.tsx
import { RouteObject } from 'react-router-dom';
import { HomePage, ContactPage } from './lazyComponents';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/contact/:id',
		element: <ContactPage />,
	},
];

export default routes;
