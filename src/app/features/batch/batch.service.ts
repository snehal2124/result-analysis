import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';
import { ServiceUrls } from 'src/app/core/service-urls';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private httpService: HttpService) { }

  getBatches(filterParams = '') {
    return this.httpService.get(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.BATCHES_URI}${filterParams}`);
  }

  getBatch() {
    return this.httpService.get(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.BATCHES_URI}`);
  }

  createBatch(formData: Object) {
    return this.httpService.post(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.BATCHES_URI}`, formData);
  }

  updateBatch(formData: any) {
    console.log('formData: ', formData);
    return this.httpService.put(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.BATCHES_URI}/${formData.id}`, formData);
  }

  deleteBatch(batchId: string) {
    console.log('batchId: ', batchId);
    return this.httpService.delete(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.BATCHES_URI}/${batchId}`, {});
  }
}
