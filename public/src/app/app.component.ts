import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Restful Task Continued';
  tasks = [];
  one_task = null;
  constructor(private _httpService: HttpService){
    this.getTasks();
    this.getOneTask();
  } 
  getTasks() {
    let tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      this.tasks = data["all_tasks"];
      console.log("Got our tasks!", data);
  }); 
  }
  getOneTask() {
    let tempObservable = this._httpService.getOneTask();
    tempObservable.subscribe(data => {
      this.one_task = data["one_task"];
      console.log("Got our task", data);
    });
  }
}