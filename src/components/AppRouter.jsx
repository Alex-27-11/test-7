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
	return (
		isAuth
			?
			<>
				{/* <Navbar /> */}
				<Routes>
					{/* {routes.map(route =>
						<Route
						key={route.path}
							path={route.path}
							element={route.element}
							exact={route.exact}
						/>
					)} */}
					<Route path='/' element={<Navbar />}>
						<Route index element={<Posts />} />
						<Route path='about' element={<About />} />
						<Route exact path='/:id' element={<PostIdPage />} />
						<Route path='*' element={<Error />} />
					</Route>

				</Routes>
			</>

			:
			<>
				{/* <Navbar /> */}
				<Routes>
					<Route path='/' element={<Navbar />}>
						<Route index element={<Login />} />
						{/* <Route exact path='*' element={} /> */}
						<Route path='*' element={<Error />} />
					</Route>


				</Routes>
			</>



	);
};
export default AppRouter;