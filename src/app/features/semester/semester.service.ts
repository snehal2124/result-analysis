import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor(private httpService: HttpService) { }

  getSemesters() {
    // return this.httpService.get('url');
    return of([
      {
        id: '1',
        name: '1',
        code: '2016-2022'
      },
      {
        id: '2',
        name: '2',
        code: '2016-2022'
      },
      {
        id: '3',
        name: '3',
        code: '2016-2022'
      },
      {
        id: '4',
        name: '5',
        code: '2016-2022'
      }, {
        id: '5',
        name: '6',
        code: '2016-2022'
      }
    ])
  }

  getSemester() {
    // return this.httpService.get('sdsad');
    return of({
      id: '6',
      name: 'Batch 6',
      code: '2016-2022'
    })
  }

  createSemester(formData: Object) {
    // return this.httpService.post('url', formData);
    return of({})
  }

  updateSemester(formData: Object) {
    console.log('formData: ', formData);
    // return this.httpService.patch('url', formData);
    return of({})
  }

  deleteSemester(semesterId: string) {
    console.log('semesterId: ', semesterId);
    // return this.httpService.delete('url', {});
    return of({})
  }
}
