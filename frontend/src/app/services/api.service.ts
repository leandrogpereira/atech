import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public get(path, params = {}) {
    return this.http
    .get(this.apiUrl(path), this.getOptions(params))
      .toPromise()
      .then(response => response)
      .catch(response => response);
  }

  post(path, params = {}) {
    return this.http
      .post(this.apiUrl(path), params, this.getOptions())
      .toPromise()
      .then(response => response)
      .catch(response => response);
  }

  delete(path, params = {}) {
    return this.http
      .delete(this.apiUrl(path), this.getOptions({}, params))
      .toPromise()
      .then(response => response)
      .catch(response => response);
  }

  patch(path, params = {}) {
    return this.http
      .patch(this.apiUrl(path), params, this.getOptions())
      .toPromise()
      .then(response => response)
      .catch(response => response);
  }

  private apiUrl(path) {
    const url = [environment.apiUrl];

    return [...url, path]
      .filter(item => !!item)
      .map(item => item.replace(/^\//, ''))
      .map(item => item.replace(/\/$/, ''))
      .filter(item => !!item)
      .join('/');
  }

  private getOptions(params = {}, body = {}) {
    let headers: any = {'Content-Type': 'application/json'};

    return {
      headers: new HttpHeaders(headers),
      params,
      body,
    };
  }
}
