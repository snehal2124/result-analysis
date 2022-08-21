import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';
import { ServiceUrls } from 'src/app/core/service-urls';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpService: HttpService) { }

  getStudents() {
    return this.httpService.get(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.STUDENTS_URI}`);
  }

  getStudent() {
    return this.httpService.get(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.STUDENTS_URI}`);
  }

  createStudent(formData: Object) {
    return this.httpService.post(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.STUDENTS_URI}`, formData);
  }

  updateStudent(formData: any) {
    console.log('formData: ', formData);
    return this.httpService.put(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.STUDENTS_URI}/${formData.id}`, formData);
  }

  deleteStudent(studentId: string) {
    console.log('studentId: ',studentId );
    return this.httpService.delete(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.STUDENTS_URI}/${studentId}`, {});
  }
}
