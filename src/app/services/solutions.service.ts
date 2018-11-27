import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Solution } from '../models';

@Injectable()
export class SolutionsService {
    private solutionsUrl = 'api/solutions';
    constructor(private http: HttpClient) { }
    
        getSolutions(): Observable<Solution[]> {
            return this.http.get<Solution[]>(this.solutionsUrl)
        }
}