import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from '../pages/About';
import Posts from '../pages/Posts';
import Navbar from '../components/UI/Navbar/Navbar';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';
import { routes } from '../router';
import { useContext } from 'react';
import { AuthContext } from '../context';

const AppRouter = () => {
	const { isAuth } = useContext(AuthContext);
	console.log(isAuth)
	return (
		isAuth
			?
			<Routes>
				<Route path='/' element={<Navbar />}>
					{/* {routes.map(route =>
						<Route
							path={route.path}
							element={route.element}
							exact={route.exact}
						/>
					)} */}
					<Route path='about' element={<About />} />
					<Route exact path='posts' element={<Posts />} />
					<Route exact path='posts/:id' element={<PostIdPage />} />
					<Route path='*' element={<Error />} />
				</Route>
			</Routes>
			:
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route exact path='*' element={<Login />} />
					{/* <Route path='*' element={<Error />} /> */}
				</Route>
			</Routes>


	);
};
export default AppRouter;