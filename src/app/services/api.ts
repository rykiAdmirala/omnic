import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  
  headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) {}
  
  private getJson(resp: Response) {
    return resp.json();
  }

  private checkForError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

  get(path?: string): Observable<any> {
    return this.http.get(`${path}`, { headers: this.headers })
      .map(this.getJson)
      .catch(this.checkForError);
  }
  
  post(path?: string, body?: any): Observable<any> {
    return this.http.post(
      `${path}`,
      JSON.stringify(body),
      { headers: this.headers }
    )
    .map(this.getJson)
    .catch(this.checkForError);
  }
  
  put(path?: string, body?: any): Observable<any> {
    return this.http.put(
      `${path}`,
      JSON.stringify(body),
      { headers: this.headers }
    )
    .map(this.getJson)
    .catch(this.checkForError);
  }
  
  delete(path?: string): Observable<any> {
    return this.http.delete(
      `${path}`,
      { headers: this.headers }
    )
    .map(this.getJson)
    .catch(this.checkForError);
  }


}