import { Component } from '@angular/core';

@Component({
selector: 'page-notFound',
template: `
			<div class="jumbotron">
			  <h1 style="text-align: center;">Broken Link</h1>
			  <p style="text-align: center;">Ups, something when wrong, please ...</p>
			  <p style="text-align: center;"><a class="btn btn-primary btn-sm" routerLink="/" role="button">Go back to home</a></p>
			</div>
		`
})

export	class NotFoundComponent {

}