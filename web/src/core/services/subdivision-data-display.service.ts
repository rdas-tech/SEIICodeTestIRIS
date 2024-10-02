import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubDivisionApiResponse } from 'src/app/subdivision-data-display/model/subdivision-data-display.model';

@Injectable({
	providedIn: 'root'
})
export class SubDivisionService {
	http = inject(HttpClient);

	getSubDivisions(): Observable<SubDivisionApiResponse> {
		return this.http.get<SubDivisionApiResponse>(`${environment.apiUrl}/subdivisions`);
	}
}
