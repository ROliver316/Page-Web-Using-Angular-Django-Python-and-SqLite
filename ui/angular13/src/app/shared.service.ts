import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  getProjectList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/project/');
  }

  addProject(val:any){
    return this.http.post(this.APIUrl + '/project/', val);
  }

  updateProject(val:any){
    return this.http.put(this.APIUrl + '/project/', val);
  }

  deleteProject(val:any){
    return this.http.delete(this.APIUrl + '/project/' + val);
  }

  getAllProjectNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/project/');
  }


}
