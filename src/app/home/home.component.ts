import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  components : any[] = [{name: 'Invoice Management', route: '/invoice-management', background: 'invoice-background'}, 
  {name: 'Accounting', route: '/accounting', background: null}, 
  {name: 'Manage Clients', route: '/clients', background: null} ]

  constructor() { }

  getBackground(comp : any)
  {
    if(comp.background) return comp.background
    else return null
  }

  getRandomPurpleColor(comp : any)
  {
    if(!comp.background)
    {
      let red = Math.floor((Math.random() * 80) + 130)
      let blue = Math.floor((Math.random() * 80) + 140)
  
      return `rgb(${red},0,${blue})`
    }
    else return null
  }

}
