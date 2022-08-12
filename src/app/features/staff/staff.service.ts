import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private httpService: HttpService) { }

  getStaffs() {
    // return this.httpService.get('url');
    return of([
      {
        id: '1',
        firstname: 'aaa',
        lastname: '4',
        email: 'namrata@gmail.com',
        mobile: 2020,
        
      },
      {
        id: '2',
        firstname: 'aaa',
        lastname: '4',
        email: 'namrata@gmail.com',
        mobile: 2020,
        
      },
      {
        id: '3',
        firstname: 'aaa',
        lastname: '4',
        email: 'namrata@gmail.com',
        mobile: 2020,
        
      },
      {
        id: '4',
        firstname: 'aaa',
        lastname: '4',
        email: 'namrata@gmail.com',
        mobile: 2020,
        
      }, {
        id: '5',
        firstname: 'aaa',
        lastname: '4',
        email: 'namrata@gmail.com',
        mobile: 2020,
      }
    ])
  }

  getBatch() {
    // return this.httpService.get('sdsad');
    return of({
      id: '6',
        firstname: 'aaa',
        lastname: '4',
        email: 'namrata@gmail.com',
        mobile: 2020,
        
    })
  }

  createStaff(formData: Object) {
    // return this.httpService.post('url', formData);
    return of({})
  }

  updateStaff(formData: Object) {
    console.log('formData: ', formData);
    // return this.httpService.patch('url', formData);
    return of({})
  }

  deleteStaff(staffId: string) {
    console.log('staffId: ', staffId);
    // return this.httpService.delete('url', {});
    return of({})
  }
}
