import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-passports',
  templateUrl: './view-passports.component.html',
  styleUrls: ['./view-passports.component.css']
})
export class ViewPassportsComponent implements OnInit {
  passportId:string=''
  passport:any=[] 
  groupId:string=''
  groupName:string=''
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.Id);
      this.passportId=data.Id;
      this.api.viewPassportDetails(this.passportId).subscribe((result:any)=>{
        console.log(result);
        this.passport=result
        this.groupId=result.GroupId
        console.log(this.groupId);
        
        this.api.getNationality(this.groupId).subscribe((data:any)=>{
          console.log(data);
          this.groupName=data.name
          console.log(this.groupName);
          
          
        })
      })
    })
  }
}
