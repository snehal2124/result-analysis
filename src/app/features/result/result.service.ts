import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';



@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private httpService: HttpService) { }

  getResults() {
    return of([
      {
        id: '1',
        studentid: 'id',
        batchid: 'batch',
        semesterid: 'sem_id',
        subjectid: 'sub_id',
        marksobtained: '%',
      },
      {
        id: '2',
        studentid: 'id',
        batchid: 'batch',
        semesterid: 'sem_id',
        subjectid: 'sub_id',
        marksobtained: '%',
       
      },
      {
        id: '3',
        studentid: 'id',
        batchid: 'batch',
        semesterid: 'sem_id',
        subjectid: 'sub_id',
        marksobtained: '%',
       
      },
      {
        id: '4',
        studentid: 'id',
        batchid: 'batch',
        semesterid: 'sem_id',
        subjectid: 'sub_id',
        marksobtained: '%'
       
      }, {
        id: '5',
        studentid: 'id',
        batchid: 'batch',
        semesterid: 'sem_id',
        subjectid: 'sub_id',
        marksobtained: '%',
       
      }
    ])
  }
  getResult() {
    // return this.httpService.get('sdsad');
    return of({
      
      id: '6',
      studentid: 'id',
      batchid: 'batch',
      semesterid: 'sem_id',
      subjectid: 'sub_id',
      marksobtained: '%',
     
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

  



