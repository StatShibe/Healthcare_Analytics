import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthProvider'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
	{
		path : "/",
		element : <App/>,
		errorElement : <ErrorPage/>
	},
	{
		path : "login",
		element : <LoginPage/>,
		errorElement : <ErrorPage/>
	},
	{
		path : "dashboard",
		element : <DashboardPage/>,
		errorElement : <ErrorPage/>
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router = {router}/>
	</React.StrictMode>
)
