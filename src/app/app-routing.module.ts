import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassportManagerComponent } from './passport-manager/passport-manager.component';
import { AddPassportsComponent } from './add-passports/add-passports.component';
import { ViewPassportsComponent } from './view-passports/view-passports.component';
import { EditPassportsComponent } from './edit-passports/edit-passports.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { //localhost:4200 -> localhost:4200/passportManager
    path:'',redirectTo:'passportManager',pathMatch:'full'
  },
  { //listing all passports details
    path:'passportManager',component:PassportManagerComponent
  },
  {//add new contact - localhost:4200/passportManager/addPassport
    path:'passportManager/addPassports',component:AddPassportsComponent
  },
  {//view a particular passport
    path:'passportManager/view/:Id',component:ViewPassportsComponent
  },
  {//edit a particular passport
    path:'passportManager/edit/:passportId',component:EditPassportsComponent
  },
  {//page not found
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
