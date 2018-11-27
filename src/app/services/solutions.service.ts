import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Solution } from '../models';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SolutionsService {
    private solutionsUrl = 'api/solutions';

    constructor(private http: HttpClient) { }
    
        getSolutions(): Observable<Solution[]> {
            return this.http.get<Solution[]>(this.solutionsUrl)
        }
        /** DELETE: delete the hero from the server */
        deleteSolution (solution: Solution | number): Observable<Solution> {
            const id = typeof solution === 'number' ? solution : solution.id;
            const url = `${this.solutionsUrl}/${id}`;
            return this.http.delete<Solution>(url, httpOptions);
        }
}