import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';
import { ServiceUrls } from 'src/app/core/service-urls';



@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  constructor(private httpService: HttpService) { }

  getSpecializations() {
    return this.httpService.get(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SEPECIALIZATIONS_URI}`);
  }

  getSpecialization(specializationId: string) {
    console.log('specializationId: ', specializationId);
    return this.httpService.get(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SEPECIALIZATIONS_URI}`);
  }

  createSpecialization(formData: Object) {
    return this.httpService.post(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SEPECIALIZATIONS_URI}`, formData);
  }

  updateSpecialization(formData: any) {
    console.log('formData: ', formData);
    return this.httpService.put(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SEPECIALIZATIONS_URI}/${formData.id}`, formData);
  }

  deleteSpecialization(specializationId: string) {
    console.log('specializationId: ', specializationId);
    return this.httpService.delete(`${ServiceUrls.RESULT_ANALYSIS_API}${ServiceUrls.SEPECIALIZATIONS_URI}/${specializationId}`);
  }
}





