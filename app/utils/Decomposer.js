import Finder from './Finder';

export default class Decomposer {
	constructor(state, action, keyField) {
		this._keyField = keyField;
		this._state = state;
		this._action = action;
		this._finder = new Finder();
	}

	_decomposeFromArr(key, positionInState, reducer) {
		const currentIndex = this._finder.findIndexOfObjInArr(this._state, this._keyField, key);
		const newState = [ ...this._state ];
		newState[currentIndex][positionInState] = reducer(this._state[currentIndex][positionInState], this._action);
		return newState;
	}

	getDecomposedReducer(key, positionInState, reducer) {
		return this._decomposeFromArr(key, positionInState, reducer);
	}

}