import { createBrowserRouter } from 'react-router-dom'
import { IndexPage } from '~/pages/index'
import { DefaultLayout } from '~/app/layouts/default-layout'
import { RouterPath } from '~/shared/config'

export const router = createBrowserRouter([
	{
		path: RouterPath.Index,
		element: <DefaultLayout />,
		children: [
			{
				path: RouterPath.Index,
				element: <IndexPage />,
			},
		],
	},
], {
	basename: '/togather/',
})
