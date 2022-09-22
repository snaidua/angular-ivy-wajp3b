import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { pipe, catchError, Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public postFromServer(vurl: string, vdata: any): Observable<any> {
    const sbody: string = JSON.stringify(vdata);
    const options = { headers: { 'Content-Type': 'application/json' } };

    return this.http.post(vurl, sbody, options);
  }
}
