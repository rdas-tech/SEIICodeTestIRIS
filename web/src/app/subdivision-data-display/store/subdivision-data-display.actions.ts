import { createAction, props } from '@ngrx/store';
import { SubdivisionData } from '../model/subdivision-data-display.model';

export const fetchSubDivisionData = createAction('[SubDivision Component] Fetch Data');
export const setSubDivisionData = createAction('[SubDivision Component] Set Data', props<{ subdivisions: SubdivisionData[] }>());
export const setSubDivisionError = createAction('[SubDivision Component] Set Error', props<{ error: string }>());

