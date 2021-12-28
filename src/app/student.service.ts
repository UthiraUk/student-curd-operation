import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:3000';

  public registerStudent(studentData: any) {
    return this.http.post(this.API + '/posts', studentData)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  public getStudent() {
    return this.http.get(this.API + '/posts')
    .pipe(map((res:any)=>{
      return res
    }))
  }
  public deleteStudent(id: any) {
    return this.http.delete(this.API + '/posts?id=' + id)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  public updateStudent(student: any){
    return this.http.put(this.API +'/posts', student)
    .pipe(map((res:any)=>{
      return res
    }))
  }
}
