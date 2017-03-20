import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not.found.component';
import { contactProfile } from './contactProfile/contact.profile.component';

export const APPROUTER: Routes = [
  { path: '', component: AppComponent },
  { path: 'contactProfile/:id', component: contactProfile },
  { path: '**', component: NotFoundComponent }
];

