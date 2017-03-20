import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'FilterName'
})

export class FilterNamePipe implements PipeTransform {

  transform(contacts:any, SearchName:any): any {
  	if(SearchName === undefined) return contacts; 

	return contacts.filter(function(contact){
		return 	contact.firstName.toLowerCase().includes( SearchName.toLowerCase() );
	})
  }

}