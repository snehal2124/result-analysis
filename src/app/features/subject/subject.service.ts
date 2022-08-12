import { HttpService } from './../../core/http/http.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private httpService: HttpService) { }

  getSubjects() {
    // return this.httpService.get('url');
    return of([
      {
        id: '1',
        name: 'Subject 1',
        totalmarks:''
      },
      {
        id: '2',
        name: 'Subject 2',
        totalmarks:''
        
      },
      {
        id: '3',
        name: 'Subject 3', 
        totalmarks:''   
      },
      {
        id: '4',
        name: 'Subject 4',
        totalmarks:''
      }, 
      {
        id: '5',
        name: 'Subject 5',
        totalmarks:''
       }
    ])
  }

  getSubject()  {
    // return this.httpService.get('sdsad');
    return of({
      id: '6',
      name: 'Subject 6',
      totalmarks:''

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

  deleteSubject(subjectId: string) {
    console.log('subjectId: ', subjectId);
    // return this.httpService.delete('url', {});
    return of({})
  }
}


