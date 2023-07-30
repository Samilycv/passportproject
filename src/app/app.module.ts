import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassportManagerComponent } from './passport-manager/passport-manager.component';
import { AddPassportsComponent } from './add-passports/add-passports.component';
import { ViewPassportsComponent } from './view-passports/view-passports.component';
import { EditPassportsComponent } from './edit-passports/edit-passports.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PassportManagerComponent,
    AddPassportsComponent,
    ViewPassportsComponent,
    EditPassportsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
