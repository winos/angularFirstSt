import {Component} from '@angular/core';
import { Router , ActivatedRoute , Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { ContactColecction } from '../phoneServices/contacts.services';
import { OutletColecction } from '../phoneServices/outlets.services';

@Component({
	selector: 'contact-profile',
	templateUrl : 'contact.profile.component.html'
})

export class contactProfile {
	contactInfo:any;
	OutletProfInfo:any;
	outletInfor:any;

	constructor(private router:Router , private route:ActivatedRoute, private serviceProf:ContactColecction , private serviceOut:OutletColecction ) {
	}
    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.contactInfo = this.serviceProf.getContactsProfile(id);
        this.outletInfor = this.serviceOut.getContactOutlet(this.contactInfo.outletId);

    }
}