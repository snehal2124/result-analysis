import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  get(url: string, options: Object = {} = {}): Observable<any> {
    return this.httpClient.get(url, options).pipe(
      map((httpResponse) => {
        return httpResponse || {};
      }),
      catchError((httpErrorResponse) => {
        console.log('httpErrorResponse: ', httpErrorResponse);
        return httpErrorResponse;
      })
    );
  }

  post(url: string, body: any, options: Object = {}): Observable<any> {
    return this.httpClient.post(url, body, options).pipe(
      map((httpResponse) => {
        return httpResponse || {};
      }),
      catchError((httpErrorResponse) => {
        console.log('httpErrorResponse: ', httpErrorResponse);
        return httpErrorResponse;
      })
    );
  }

  patch(url: string, body: any, options: Object = {}): Observable<any> {
    return this.httpClient.patch(url, body, options).pipe(
      map((httpResponse) => {
        return httpResponse || {};
      }),
      catchError((httpErrorResponse) => {
        console.log('httpErrorResponse: ', httpErrorResponse);
        return httpErrorResponse;
      })
    );
  }

  put(url: string, body: any, options: Object = {}): Observable<any> {
    return this.httpClient.put(url, body, options).pipe(
      map((httpResponse) => {
        return httpResponse || {};
      }),
      catchError((httpErrorResponse) => {
        console.log('httpErrorResponse: ', httpErrorResponse);
        return httpErrorResponse;
      })
    );
  }

  delete(url: string, options: Object = {}): Observable<any> {
    return this.httpClient.delete(url, options).pipe(
      map((httpResponse) => {
        return httpResponse || {};
      }),
      catchError((httpErrorResponse) => {
        console.log('httpErrorResponse: ', httpErrorResponse);
        return httpErrorResponse;
      })
    );
  }

}
