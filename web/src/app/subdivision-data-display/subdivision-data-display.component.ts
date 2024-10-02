import { Component, inject, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fetchSubDivisionData } from './store/subdivision-data-display.actions';
import { selectSubDivisionData } from './store/subdivision-data-display.selectors';
import { columnDefs, defaultColDef } from 'src/core/utilities/grid-column-definitions';

@Component({
	selector: 'app-subdivision-data-display',
	templateUrl: './subdivision-data-display.component.html',
	styleUrls: ['./subdivision-data-display.component.css']
})
export class SubdivisionDataDisplayComponent implements OnInit {
	private readonly store = inject(Store);
	defaultColDef = defaultColDef
	paginationPageSize = 20;
	columnDefs = columnDefs;
	rowData$ = this.store.pipe(select(selectSubDivisionData));

	ngOnInit(): void {
		this.store.dispatch(fetchSubDivisionData());
	}
}
