import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from '../store';

const Cart = () => {
	let state = useSelector((state) => {return state});
	console.log(state.cart);
	let dispatch = useDispatch();

	return (
		<div className='cart'>
			{state.user.name}의 장바구니
			{/* <h5>{state.user.name}{state.user.age}</h5>
			<button onClick={() => {dispatch(increase())}}>Button</button> */}
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경</th>
					</tr>
				</thead>
				<tbody>
					{
						state.cart.map((a, i) => (
							<tr key={i}>
								<td>{state.cart[i].id + 1}</td>
								<td>{state.cart[i].name}</td>
								<td>{state.cart[i].count}</td>
								<td>
									<button onClick={() => dispatch(addCount(state.cart[i].id))}>+</button>
								</td>
							</tr>
						))
					}
				</tbody>
         </table>
		</div>
	);
};

export default Cart;