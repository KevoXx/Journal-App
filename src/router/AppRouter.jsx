import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import LayoutAuth from '../auth/layout/LayoutAuth'
import { LoginPage, RegisterPage, ErrorPage } from '../auth/pages'
import JournalPage from '../journal/pages/JournalPage'
import { CheckingAuth } from '../ui'
import { useCheckAuth } from '../hooks'

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <JournalPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/auth',
    element: <LayoutAuth />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/auth/login' />,
  },
])

function AppRouter() {
  const {status} = useCheckAuth()

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return <RouterProvider router={BrowserRouter} />
}

export default AppRouter
