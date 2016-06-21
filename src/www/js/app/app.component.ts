import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<h1>Car Manager</h1>
	<router-outlet></router-outlet>`,
	directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent implements OnInit {

	ngOnInit() {

	}

}
