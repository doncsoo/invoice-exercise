import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceManagementComponent } from './invoice-management/invoice-management.component';
import { HomeComponent } from './home/home.component';
import { NotexistComponent } from './notexist/notexist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'invoice-management', component: InvoiceManagementComponent },
  { path: '**', component: NotexistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
