import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyPassport } from 'src/model/myPassport';

@Component({
  selector: 'app-passport-manager',
  templateUrl: './passport-manager.component.html',
  styleUrls: ['./passport-manager.component.css']
})
export class PassportManagerComponent implements OnInit{
  searchKey:string=''//To hold search value
  loginDate:any;
  //To hold passport details
  allPassports:any=[];
  //api - dependency injection
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAllPassports()
  }
  getAllPassports(){
    this.api.getAllPassport().subscribe((data:MyPassport)=>{
      console.log(data);//array of passport
      this.allPassports=data
      })
  }
  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
  }
  deletePassport(passportId:any){
    this.api.deletePassport(passportId).subscribe((result:any)=>{
      alert("Delete Successfully")
      this.getAllPassports()
    })
  }
}
