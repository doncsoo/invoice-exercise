import { Component} from '@angular/core';
import { invoices } from './invoices.json';

@Component({
  selector: 'invoice-management',
  templateUrl: './invoice-management.component.html',
  styleUrls: ['./invoice-management.component.scss']
})
export class InvoiceManagementComponent {

  currencies = ["USD", "EUR", "HUF"]

  name : string = ""
  value : number = 0
  currency : string = "EUR"
  status : boolean = true
  invoices : any[] = invoices;

  constructor() { }

  addInvoice(form : any) : void {
    invoices.push({
      "id": this.generateId(),
      "name": this.name,
      "value": this.value,
      "currency": this.currency,
      "completed": this.status
    })
    form.reset();
  }

  generateId() : number {
    return Math.floor((Math.random() * 9000) + 1000)
  }

}
