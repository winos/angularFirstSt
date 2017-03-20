import { Injectable } from	'@angular/core';
import { OUTLETS } from './mocks/outlets.mocks';

@Injectable()

export class OutletColecction {

	getOutlets(){
		return OUTLETS;
	}
	getContactOutlet(id){
		let Outlet  = OUTLETS.find(pr => pr.id == id);
		return Outlet;
	}

}