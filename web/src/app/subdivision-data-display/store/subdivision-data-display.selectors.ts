import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SubDivisionState } from '../model/subdivision-data-display.model';

export const selectSubDivisionState = createFeatureSelector<SubDivisionState>('subDivisionsStore');
export const selectSubDivisionData = createSelector(selectSubDivisionState, (state: SubDivisionState) => state?.subdivisions);
