import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';
const Navbar = () => {
	const { setIsAuth } = useContext(AuthContext)

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth')
	}

	return (
		<>
			<header className='navbar'>
				<MyButton style={{ marginLeft: 30 }} onClick={logout}>Выйти</MyButton>
				<div className='navbar__links'>
					<Link style={{ marginRight: 10 }} to='/about'>О сайте</Link>
					<Link style={{ marginRight: 30 }} to='/'>Посты</Link>
				</div>
			</header>
			<Outlet />
		</>

	);
};
export default Navbar;