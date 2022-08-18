import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InvoiceManagementComponent } from './invoice-management/invoice-management.component';
import { FormsModule } from '@angular/forms';
import { NotexistComponent } from './notexist/notexist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvoiceManagementComponent,
    NotexistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
