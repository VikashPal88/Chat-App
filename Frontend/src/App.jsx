import LoginPage from './pages/LoginPage'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider, useAuthContext } from './context/AuthContext'

function App() {

  const { authUser } = useAuthContext()

  const router = createBrowserRouter([
    {
      path: "/",
      element: authUser ? <HomePage /> : <Navigate to="/login" />
    },
    {
      path: "/login",
      element: authUser ? <Navigate to="/" /> : <LoginPage />
    },
    {
      path: "/signup",
      element: authUser ? <Navigate to="/" /> : <SignupPage />,
    },
  ])



  return (
    <>
      <div className='flex items-center justify-center min-h-screen w-full  '>
        <Toaster />
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
