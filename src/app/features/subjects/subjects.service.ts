import { HttpService } from './../../core/http/http.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private httpService: HttpService) { }

  getSubjects() {
    // return this.httpService.get('url');
    return of([
      {
        id: '1',
        name: 'Subject 1',
        code: 'xxx',
        Total_marks: '%',
        Semester_id: '4',
      },
      {
        id: '2',
        name: 'Subject 2',
        code: 'xxx',
        Total_marks: '%',
        Semester_id: '4',
      },
      {
        id: '3',
        name: 'Subject 3',
        code: 'xxx',
        Total_marks: '%',
        Semester_id: '4',
      },
      {
        id: '4',
        name: 'Subject 4',
        code: 'xxx',
        Total_marks: '%',
        Semester_id: '4',
      }, 
      {
        id: '5',
        name: 'Subject 5',
        code: 'xxx',
        Total_marks: '%',
        Semester_id: '4',
       },
       {
        id: '6',
        name: 'Subject 6',
        code: 'xxx',
        Total_marks: '%',
        Semester_id: '4',

       }
    ])
  }

  getSubject()  {
    // return this.httpService.get('sdsad');
    return of({
      id: '6',
      name: 'Subject 6',
      code: 'xxx',
      Total_marks: '%',
      Semester_id: '4'

    })
  }

  createSubject(formData: Object) {
    // return this.httpService.post('url', formData);
    return of({})
  }

  updateSubject(formData: Object) {
    console.log('formData: ', formData);
    // return this.httpService.patch('url', formData);
    return of({})
  }

  deleteSubject(batchId: string) {
    console.log('batchId: ', batchId);
    // return this.httpService.delete('url', {});
    return of({})
  }
}


