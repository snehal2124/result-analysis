import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private httpService: HttpService) { }

  getResults() {
    // return this.httpService.get('url');
    return of([
      {
        id: '1',
        student_id: 'roll no',
        batch_id: 'batch',
        semester_id: 4,
        subject_id: 'subject',
        marks_obtained: '%',
      },
      {
        id: '1',
        student_id: 'roll no',
        batch_id: 'batch',
        semester_id: 4,
        subject_id: 'subject',
        marks_obtained: '%',
      },
      {
        id: '1',
        student_id: 'roll no',
        batch_id: 'batch',
        semester_id: 4,
        subject_id: 'subject',
        marks_obtained: '%',
      },
      {
        id: '1',
        student_id: 'roll no',
        batch_id: 'batch',
        semester_id: 4,
        subject_id: 'subject',
        marks_obtained: '%',
      }, {
        id: '1',
        student_id: 'roll no',
        batch_id: 'batch',
        semester_id: 4,
        subject_id: 'subject',
        marks_obtained: '%',
      }
    ])
  }

  getResult() {
    // return this.httpService.get('sdsad');
    return of({
      id: '1',
        student_id: 'roll no',
        batch_id: 'batch',
        semester_id: 4,
        subject_id: 'subject',
        marks_obtained: '%',
     
    })
  }

  createResult(formData: Object) {
    // return this.httpService.post('url', formData);
    return of({})
  }

  updateResult(formData: Object) {
    console.log('formData: ', formData);
    // return this.httpService.patch('url', formData);
    return of({})
  }

  deleteResult(resultId: string) {
    console.log('resultId: ', resultId);
    // return this.httpService.delete('url', {});
    return of({})
  }
}
