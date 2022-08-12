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
        name: 'xxx',
        lastName: 'xyz',
        rollNo: '22',
        email: 'namrata@gmail.com',
        mobile: '99999999999',
        address: 'nipani' 
      },
      {
        id: '2',
        name: 'xxx',
        lastName: 'xyz',
        rollNo: '22',
        email: 'namrata@gmail.com',
        mobile: '99999999999',
        address: 'nipani'
      },
      {
        id: '3',
        name: 'xxx',
        lastName: 'xyz',
        rollNo: '22',
        email: 'namrata@gmail.com',
        mobile: '99999999999',
        address: 'nipani'
      },
      {
        id: '4',
        name: 'xxx',
        lastName: 'xyz',
        rollNo: '22',
        email: 'namrata@gmail.com',
        mobile: '99999999999',
        address: 'nipani'
      },
       {
        id: '5',
        name: 'xxx',
        lastName: 'xyz',
        rollNo: '22',
        email: 'namrata@gmail.com',
        mobile: '99999999999',
        address: 'nipani'
        
      }
    ])
  }

  getStudent() {
    // return this.httpService.get('sdsad');
    return of({
      id: '6',
      name: 'xxx',
      lastName: 'xyz',
      email: 'namrata@gmail.com',
      mabile: '99999999999',
      address: 'nipani'
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
