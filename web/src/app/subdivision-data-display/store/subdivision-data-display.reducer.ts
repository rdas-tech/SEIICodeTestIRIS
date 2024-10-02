import { SubDivisionState } from '../model/subdivision-data-display.model';
import { setSubDivisionData, setSubDivisionError } from './subdivision-data-display.actions';

export const initialState: SubDivisionState = {
	subdivisions: [],
	error: null
};

export function subDivisionsReducer(state = initialState, action: any) {
	switch (action.type) {
		case setSubDivisionData.type:
			return {
				...state,
				subdivisions: action.subdivisions,
			};
		case setSubDivisionError.type:
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
}
