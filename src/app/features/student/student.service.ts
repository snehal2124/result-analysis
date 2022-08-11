import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpService: HttpService) { }

  getStudents() {
    // return this.httpService.get('url');
    return of([
      {
        id: '1',
        name:"student_name",
        roll_no:'1',
        email:'email',
        mobile:'mob_no',
        address:'address',
      },
      {
        id: '2',
        name:"student_name",
        roll_no:'2',
        email:'email',
        mobile:'mob_no',
        address:'address',
        
      },
      {
        id: '3',
        name:"student_name",
        roll_no:'3',
        email:'email',
        mobile:'mob_no',
        address:'address',
       
      },
      {
        id: '4',
        name:"student_name",
        roll_no:'4',
        email:'email',
        mobile:'mob_no',
        address:'address',
       
      }, {
        id: '5',
        name:"student_name",
        roll_no:'5',
        email:'email',
        mobile:'mob_no',
        address:'address',
        
      }
    ])
  }

  getStudent() {
    // return this.httpService.get('sdsad');
    return of({
      id: '1',
      name:"student_name",
      roll_no:'1',
      email:'email',
      mobile:'mob_no',
      address:'address'
     
    })
  }

  createStudent(formData: Object) {
    // return this.httpService.post('url', formData);
    return of({})
  }

  updateStudent(formData: Object) {
    console.log('formData: ', formData);
    // return this.httpService.patch('url', formData);
    return of({})
  }

  deleteStudent(studentId: string) {
    console.log('studentId: ', studentId);
    // return this.httpService.delete('url', {});
    return of({})
  }
}
