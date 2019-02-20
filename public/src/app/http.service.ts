import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks(); // this is how i run getTasks()
    this.getOneTask();
  }

  getTasks() {
    console.log('rabbit');
    return this._http.get('/tasks');
  }

  getOneTask() {
    return this._http.get('/tasks/5c671545e14499406c9548eb');
  }
}