import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';
import { ServiceUrls } from 'src/app/core/service-urls';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor(private httpService: HttpService) { }

  getSemesters(filterParams = '') {
    return this.httpService.get(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SEMESTERS_URI}${filterParams}`);
  }

  getSemester() {
    return this.httpService.get(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SEMESTERS_URI}`);
  }

  createSemester(formData: Object) {
    return this.httpService.post(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SEMESTERS_URI}`, formData);
  }

  updateSemester(formData: any) {
    console.log('formData: ', formData);
    return this.httpService.put(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SEMESTERS_URI}/${formData.id}`, formData);
  }

  deleteSemester(semesterId: string) {
    console.log('semesterId: ',semesterId );
    return this.httpService.delete(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SEMESTERS_URI}/${semesterId}`, {});
  }
}
