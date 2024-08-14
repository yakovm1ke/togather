import { createBrowserRouter } from 'react-router-dom';
import { IndexPage } from '../pages';
import { DefaultLayout } from '../components/default-layout';

export const RouterPath = {
  Index: '/'
}

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: RouterPath.Index,
        element: <IndexPage />,
      }
    ]
  }
])