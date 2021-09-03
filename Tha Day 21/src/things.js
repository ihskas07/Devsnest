import { useState } from "react";
import './App.css';

export default function AddItemForm({ addItem }) {
	const [title, setTitle] = useState('');
	const [calorie, setCalorie] = useState('');

	function Submitting(e){
		e.preventDefault();
		addItem({ title, calorie });
		setTitle('');
		setCalorie('');
};
return (
	<form onSubmit={Submitting}>
		<p><label className='title'>Item name:</label></p>
		<input
			type='text'
			name='title'
			id='title'
			required
			value={title}
			onChange={e => setTitle(e.target.value)}
			placeholder='Item name'
		/>
		<p><label className='title'>Calorie amount:</label></p>
		<input
			type='number'
			name='number'
			id='number'
			required
			value={calorie}
			onChange={e => setCalorie(e.target.value)}
			placeholder='Calorie amount'
		/>

		<p>< button type='submit' className='submit'>Add to list </button></p>
	</form>
	);
}