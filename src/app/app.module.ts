import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not.found.component';
import { InitComponent } from './init.component';
import { contactProfile } from './contactProfile/contact.profile.component';
import { FilterNamePipe } from './pipes/search.name.pipe';


// Routes
import { RouterModule , Routes } from '@angular/router';
import { APPROUTER } from './router';

// Contact Collections info
import { ContactColecction } from './phoneServices/contacts.services';
import { OutletColecction } from './phoneServices/outlets.services';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    InitComponent,
    contactProfile,
    FilterNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(APPROUTER)
  ],
  providers: [
    ContactColecction, 
    OutletColecction
  ],
  bootstrap: [InitComponent]
})
export class AppModule { }
