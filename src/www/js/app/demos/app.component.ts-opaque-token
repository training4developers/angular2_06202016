import { Component, Injectable, OnInit, OpaqueToken, Inject, Optional } from '@angular/core';

const DoItToken = new OpaqueToken('doit');

let t: number = 0;

interface DoIt {
	doIt(): void;
}

@Injectable()
export class A implements DoIt {

	constructor() {
		console.log('new a', t++);
	}

	doIt() {
		console.log('did A');
	}
}

@Injectable()
export class B implements DoIt {
	doIt() {
		console.log('did B');
	}
}

const c = {
	doIt: () => console.log('did C')
}

var useA = true;

const getSvc = (a: A) => {
	if (useA) {
		return a;
	} else {
		return new B();
	}
};


@Component({
	selector: 'my-app',
	template: `Hi!`,
	providers: [
		A,
		{ provide: DoItToken, useFactory: getSvc, deps: [ A ] }
	]
})
export class AppComponent implements OnInit {

	constructor(
		private a: A,
		@Inject(DoItToken) private b: DoIt,
		@Optional() private c: B
	) { }

	ngOnInit() {
		this.a.doIt();
		this.b.doIt();
	}

}
