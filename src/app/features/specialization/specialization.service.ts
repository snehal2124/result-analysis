import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';



@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  constructor(private httpService: HttpService) { }

  getSpecializations() {
    return of([
      {
    
        id: '1',
        name: '1',
        no_of_years: '4',
        no_of_sems: 1,
        code: '2016-2022'
      },
      {
        id: '2',
        name: '2',
        no_of_years: '4',
        no_of_sems: 2,
        code: '2016-2022'
      },
      {
        id: '3',
        name: '3',
        no_of_years: '4',
        no_of_sems: 3,
        code: '2016-2022'
      },
      {
        id: '5',
        name: '5',
        no_of_years: '4',
        no_of_sems: 4,
        code: '2016-2022'
      }, {
        id: '6',
        name: '6',
        no_of_years: '4',
        no_of_sems: 5,
        code: '2016-2022'
      }
    ])
  }
  getSpecialization() {
    // return this.httpService.get('sdsad');
    return of({
      
      id: '6',
      name: '6',
      no_of_years: '4',
      no_of_sems: '4',
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

  deleteSpecialization(specializationId: string) {
    console.log('specializationId: ', specializationId);
    // return this.httpService.delete('url', {});
    return of({})
  }
}

  



