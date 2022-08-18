import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  components : any[] = [{name: 'Home', route: '/'},
  {name: 'Invoice Management', route: '/invoice-management'}, 
  {name: 'Accounting', route: '/accounting'}, 
  {name: 'Manage Clients', route: '/clients'} ]
}
