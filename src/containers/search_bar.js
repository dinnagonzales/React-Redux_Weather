import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.state = { term: '' };
	}

	onInputChange(e){

		this.setState({
			term: e.target.value
		});

	}

	onFormSubmit(e){
		e.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
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

function mapDispatchToProps(dispatch){
	//dispatcher -- makes sure payload is passed on to the middleware and
	//reducer  
	return bindActionCreators({ fetchWeather }, dispatch);
}

//state -> props
//dispatch -> props -- USE null
export default connect(null, mapDispatchToProps)(SearchBar);
















