import { Component, OnInit } from '@angular/core';
import { MyPassport } from 'src/model/myPassport';
import { ApiService } from '../services/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-passports',
  templateUrl: './add-passports.component.html',
  styleUrls: ['./add-passports.component.css']
})
export class AddPassportsComponent implements OnInit {
    allGroups:any=[]
    passport:MyPassport={}

    constructor(private api:ApiService,private router:Router){
      this.passport.GroupId="Select Nationality";
    }
      ngOnInit(): void {
      this.api.getAllNationality().subscribe((data:any)=>{
        console.log(data);
        this.allGroups=data
      })
  }
    addPassport(){
      this.api.addPassport(this.passport).subscribe((result:any)=>{
        this.router.navigateByUrl('')
      })
    }
}
