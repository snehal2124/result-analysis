import { ServiceUrls } from 'src/app/core/service-urls';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';



@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private httpService: HttpService) { }

  getResults() {
    return this.httpService.get(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.RESULTS_URI}`);
  }

  getResult() {
    return this.httpService.get(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.RESULTS_URI}`);
  }

  createResult(formData: Object) {
    return this.httpService.post(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.RESULTS_URI}`, formData);
  }

  updateResult(formData: any) {
    console.log('formData: ', formData);
    return this.httpService.put(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.RESULTS_URI}/${formData.id}`, formData);
  }

  deleteResult(resultId: string) {
    console.log('resultId: ', resultId);
    return this.httpService.delete(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.RESULTS_URI}/${resultId}`, {});
  }
}

  



