import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchSubDivisionData, setSubDivisionData, setSubDivisionError } from './subdivision-data-display.actions';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SubDivisionService } from 'src/core/services/subdivision-data-display.service';
import { SubDivisionApiResponse, SubdivisionData } from '../model/subdivision-data-display.model';

@Injectable()
export class SubDivisionsEffects {
	private actions$ = inject(Actions);
	private readonly subDivisionService = inject(SubDivisionService);

	loadSubDivisions$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fetchSubDivisionData),
			switchMap(() =>
				this.subDivisionService.getSubDivisions().pipe(
					map((data: SubDivisionApiResponse) => setSubDivisionData({ subdivisions: data.subdivisions })),
					catchError((error) => of(setSubDivisionError({ error })))
				)
			)
		)
	);
}
