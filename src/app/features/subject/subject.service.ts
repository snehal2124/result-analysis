import { HttpService } from '../../core/http/http.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ServiceUrls } from 'src/app/core/service-urls';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private httpService: HttpService) { }

  getSubjects(filterParams = '') {
    return this.httpService.get(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SUBJECTS_URI}${filterParams}`);
  }

  getSubject(subjectId: string) {
    console.log('subjectId: ', subjectId);
    return this.httpService.get(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SUBJECTS_URI}`);
  }

  createSubject(formData: Object) {
    return this.httpService.post(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SUBJECTS_URI}`, formData);
  }

  updateSubject(formData: any) {
    console.log('formData: ', formData);
    return this.httpService.put(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SUBJECTS_URI}/${formData.id}`, formData);
  }

  deleteSubject(subjectId: string) {
    console.log('subjectId: ', subjectId);
    return this.httpService.delete(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SUBJECTS_URI}/${subjectId}`);
  }
}


