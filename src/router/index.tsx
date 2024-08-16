import { createBrowserRouter } from 'react-router-dom';
import { IndexPage } from '../pages';
import { DefaultLayout } from '../components/default-layout';

export const RouterPath = {
  Index: '/'
}

export const router = createBrowserRouter([
  {
    path: RouterPath.Index,
    element: <DefaultLayout />,
    children: [
      {
        path: RouterPath.Index,
        element: <IndexPage />,
      }
    ]
  }
], {
  basename: '/togather/'
})
