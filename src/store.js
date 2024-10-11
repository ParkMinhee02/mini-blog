import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
	name: 'user',
	initialState: {name:'min', age: 23},
	reducers: {
		changeName(state) {
			state.name = 'hee'
		}
	},
	increase(state){
		state.age += 1
	}
});
export let {changeName, increase} = user.actions;

let cart = createSlice({
	name: 'cart',
	initialState: [
		{id: 0, name: '내가 좋아하는 침구', count: 2},
		{id: 1, name: '내가 좋아하는 모빌', count: 1}
	],
	reducers: {
		addCount(state, action) {
			state[action.payload].count++
		}
	}
});
export let {addCount} = cart.actions

export default configureStore({
	reducer: {
		user: user.reducer,
		cart: cart.reducer
	}
});