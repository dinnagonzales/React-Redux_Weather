import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
	switch (action.type) {

	case FETCH_WEATHER:
		//ALWAYS return new array
		//Return new instance of state

		//return state.concat([action.payload.data]);
		console.log([ action.payload.data, ...state ]);
		return [ action.payload.data, ...state ];
	}

	return state;
}