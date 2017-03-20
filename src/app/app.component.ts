import { Component } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { FilterNamePipe } from './pipes/search.name.pipe';
import { ContactColecction } from './phoneServices/contacts.services';

import { Router } from '@angular/router';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Phone Book of Outlets';
  contacts = [];
  ResponseSearch:any;
  constructor( private contactsColl:ContactColecction , private router: Router )
  {   
    this.contacts = contactsColl.getContacts();
  }

  WatchProfile(id:number):void{
    this.router.navigate(['/contactProfile' , id])
  }

}
