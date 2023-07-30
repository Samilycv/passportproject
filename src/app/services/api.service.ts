import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyPassport } from 'src/model/myPassport';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//dependency injection
  constructor(private http:HttpClient ) { }


//get function for getting all passport details
getAllPassport():Observable<MyPassport>{
  return this.http.get('http://localhost:3000/passports')

}
//view particular passport details
viewPassportDetails(passportId:string){
  return this.http.get(`http://localhost:3000/passports/${passportId}`)
}
//API call for getting nationality 
getNationality(GroupId:string){
  return this.http.get(`http://localhost:3000/groups/${GroupId}`)
}
//api call for add passport information
addPassport(passportBody:any){
  return this.http.post(`http://localhost:3000/passports`,passportBody)
}
//api call for get nationality details
getAllNationality(){
  return this.http.get(`http://localhost:3000/groups`)
}
//api call for delete a particular passport
deletePassport(passportId:any){
  return this.http.delete(`http://localhost:3000/passports/${passportId}`)
}
updatePassport(passportId:any,passportBody:any){
  return this.http.put(`http://localhost:3000/passports/${passportId}`,passportBody)
}
}
