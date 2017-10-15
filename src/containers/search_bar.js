import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.onInputChange = this.onInputChange.bind(this);
		this.state = { term: '' };
	}

	onInputChange(e){

		this.setState({
			term: e.target.value
		});

	}
	
	onFormSubmit(e){
		e.preventDefault();
	}

	render() {
		return (
			<form 
				className='input-group'
				onSubmit={ this.onFormSubmit }>
				
				<input 
					className='form-control'
					value={ this.state.term } 
					onChange={ this.onInputChange }
					placeholder='Get a five-day forecast in your favorite cities'/>

				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>
						Search
					</button>
				</span>
			</form>
		);
	};
};

export default SearchBar;