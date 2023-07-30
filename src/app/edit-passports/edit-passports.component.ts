import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyPassport } from 'src/model/myPassport';
import { MyGroup } from 'src/model/myGroup';

@Component({
  selector: 'app-edit-passports',
  templateUrl: './edit-passports.component.html',
  styleUrls: ['./edit-passports.component.css']
})
export class EditPassportsComponent implements OnInit {
  groups: MyGroup[] = []
  passport: MyPassport = {}
  passportId: string = ''
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data);
      console.log(data.passportId);
      this.passportId = data.passportId;
      this.api.viewPassportDetails(this.passportId).subscribe((result: any) => {
        console.log(result);
        this.passport = result
        this.api.getAllNationality().subscribe((data: any) => {
          console.log(data);
          this.groups = data
        })

      })
    })
  }
  updatePassport() {
    this.api.updatePassport(this.passportId, this.passport).subscribe((result: any) => {
      console.log(result);
      this.route.navigateByUrl('/')
    })
  }

}
