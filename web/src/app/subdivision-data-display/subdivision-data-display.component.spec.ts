import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubdivisionDataDisplayComponent } from './subdivision-data-display.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AgGridModule } from 'ag-grid-angular';
import { fetchSubDivisionData } from './store/subdivision-data-display.actions';
import { selectSubDivisionData } from './store/subdivision-data-display.selectors';
import { SubdivisionData } from './model/subdivision-data-display.model';

describe('SubdivisionDataDisplayComponent', () => {
	let component: SubdivisionDataDisplayComponent;
	let fixture: ComponentFixture<SubdivisionDataDisplayComponent>;
	let store: MockStore;
	let dispatchSpy: jasmine.Spy;

	const initialState = {
		subdivisionData: []
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SubdivisionDataDisplayComponent],
			imports: [AgGridModule],
			providers: [
				provideMockStore({ initialState })
			]
		}).compileComponents();

		store = TestBed.inject(MockStore);
		fixture = TestBed.createComponent(SubdivisionDataDisplayComponent);
		component = fixture.componentInstance;

		dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
	});

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});

	it('should dispatch fetchSubDivisionData on initialization', () => {
		component.ngOnInit();
		expect(dispatchSpy).toHaveBeenCalledWith(fetchSubDivisionData());
	});

	it('should select the correct subdivision data with specific partial keys from the store', () => {
		const mockSubDivisionData: Partial<SubdivisionData>[] = [
			{ id: 1, activeSections: 5, code: 'A123' },
			{ id: 2, activeSections: 3, code: 'B456' }
		];
		store.overrideSelector(selectSubDivisionData, mockSubDivisionData as SubdivisionData[]);

		fixture.detectChanges(); // Trigger change detection

		component.rowData$.subscribe((data) => {
			// Verify only the required partial keys
			expect(data).toEqual(jasmine.arrayContaining([
				jasmine.objectContaining({
					id: 1,
					activeSections: 5,
					code: 'A123'
				}),
				jasmine.objectContaining({
					id: 2,
					activeSections: 3,
					code: 'B456'
				})
			]));
		});
	});


	it('should have default column definitions set', () => {
		expect(component.defaultColDef).toBeTruthy();
		expect(component.columnDefs).toBeTruthy();
	});

	it('should have paginationPageSize set to 20', () => {
		expect(component.paginationPageSize).toEqual(20);
	});
});
