import Navbar from "../components/UI/Navbar/Navbar";
import About from "../pages/About";
import Posts from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

export const routes = [
	{ path: 'about', element: About, exact: true },
	{ path: '/', element: Posts, exact: true },
	{ path: ':id', element: PostIdPage, exact: true },
	{ path: '*', element: Error, exact: true },
]