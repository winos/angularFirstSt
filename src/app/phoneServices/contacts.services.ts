import { Injectable } from	'@angular/core';
import { CONTACTS } from './mocks/contacts.mocks';

@Injectable()

export class ContactColecction {
	getContacts(){
		return CONTACTS;
	}
	getContactOutletId(outletId:number){
		let OutletId = CONTACTS.find( x=> x.outletId == outletId);
		console.log(OutletId);
	}
	getContactsProfile(id){
		let ContactId  = CONTACTS.find(pr => pr.id == id);
		return ContactId;

	}
	getContactsSearch(name){
		let ContactSearch  = CONTACTS.find(nm => nm.firstName == name);
		return ContactSearch;
	}

}