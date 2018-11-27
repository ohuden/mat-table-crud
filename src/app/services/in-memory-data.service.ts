import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Solution } from '../models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const solutions = [
      { id: 11, name: 'Mr. Nice', owner: 'John Doe', duedate: '10/10/2018' },
      { id: 12, name: 'Narco', owner: 'John Doe', duedate: '10/10/2018' },
      { id: 13, name: 'Bombasto', owner: 'John Doe', duedate: '10/10/2018' },
      { id: 14, name: 'Pickles', owner: null, duedate: null },
    ];
    return { solutions };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(solutions: Solution[]): number {
    return solutions.length > 0 ? Math.max(...solutions.map(solution => solution.id)) + 1 : 11;
  }
}
