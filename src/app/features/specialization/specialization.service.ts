import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';


@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  constructor(private httpService: HttpService) { }
  
  getSpecializations() {
    // return this.httpService.get('url');
    return of([
      {
        id: '1',
        name: 'Batch 1',
        no_of_years: '4',
        start_year: 2016,
        end_year: 2020,
        code: '2016-2022'
      },
      {
        id: '2',
        name: 'Batch 2',
        no_of_years: '4',
        start_year: 2016,
        end_year: 2020,
        code: '2016-2022'
      },
      {
        id: '3',
        name: 'Batch 3',
        no_of_years: '4',
        start_year: 2016,
        end_year: 2020,
        code: '2016-2022'
      },
      {
        id: '5',
        name: 'Batch 5',
        no_of_years: '4',
        start_year: 2016,
        end_year: 2020,
        code: '2016-2022'
      }, {
        id: '6',
        name: 'Batch 6',
        no_of_years: '4',
        start_year: 2016,
        end_year: 2020,
        code: '2016-2022'
      }
    ])
  }

  getSpecialization() {
    // return this.httpService.get('sdsad');
    return of({
      id: '6',
      name: 'Batch 6',
      no_of_years: '4',
      start_year: 2016,
      end_year: 2020,
      code: '2016-2022'
    })
  }

  createSpecialization(formData: Object) {
    // return this.httpService.post('url', formData);
    return of({})
  }

  updateSpecialization(formData: Object) {
    console.log('formData: ', formData);
    // return this.httpService.patch('url', formData);
    return of({})
  }
}


