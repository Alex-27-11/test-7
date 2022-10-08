import React from 'react';
import MyButton from './UI/button/MyButton';
import { NavLink } from 'react-router-dom';
const PostItem = (props) => {
	return (
		<div className='post'>
			<div className='post__content'>
				<strong>{props.post.id} {props.post.title}</strong>
				<div>
					{props.post.body}
				</div>
			</div>
			<div className='post__btn'>
				<NavLink className={({ isActive }) => isActive ? 'nav__btn' : 'nav__btn'} to={`/posts/${props.post.id}`}>Открыть</NavLink>
				<MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
			</div>
		</div>
	);
};
export default PostItem;