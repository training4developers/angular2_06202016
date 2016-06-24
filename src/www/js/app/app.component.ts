import { Component, OnInit, OnDestroy, Directive,
	ElementRef, HostListener, Output, EventEmitter,
 	TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
	selector: '[myFor]'
})
export class MyForDirective {

	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainerRef: ViewContainerRef
	) {

	}

	@Input()
	set myForOf(collection: any[]) {

		collection.forEach((item, index) => {
			const context = { $implicit: item };
			const view = this.viewContainerRef
				.createEmbeddedView(this.templateRef, context, index);
			console.log(view.context);
		});
	}

}

@Component({
  selector: 'my-app',
  template: `<div *myFor="let color of colors">Test{{color}}<div>`,
	directives: [ MyForDirective ]
})
export class AppComponent implements OnInit {

	colors: string[] = ['red','blue','white'];

	ngOnInit() {

	}

}
