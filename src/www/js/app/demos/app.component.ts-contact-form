import { Component } from '@angular/core';

// First Name Pristine: {{personFirstName.pristine}}<br>
// First Name Dirty: {{personFirstName.dirty}}<br>
// First Name Touched: {{personFirstName.touched}}<br>
// First Name Untouched: {{personFirstName.untouched}}<br>
// First Name Valid: {{personFirstName.valid}}<br>

interface Person {
	firstName: string;
	lastName: string;
	age: number;
	usCitizen: boolean;
	stateOfResidency: string;
	employmentStatus: string;
	comments: string;
}



@Component({
	selector: 'my-app',
	template: `<form>
		<div><label>
			First Name:
			<input type="text" [(ngModel)]="person.firstName" name="personFirstName" required  #personFirstName="ngModel">
			<span *ngIf="!personFirstName.valid && personFirstName.touched">Please enter a first name</span><br>
		</label></div>
		<div><label>
			Last Name:
			<input type="text" [(ngModel)]="person.lastName" name="personLastName" required  #personLastName="ngModel">
			<span *ngIf="!personLastName.valid && personLastName.touched">Please enter a last name</span><br>
		</label></div>
		<div><label>
			Age:
			<input type="number" [(ngModel)]="person.age" name="personAge">
		</label></div>
		<div><label>
			US Citizen:
			<input type="checkbox" [(ngModel)]="person.usCitizen" name="personUSCitizen">
		</label></div>
		<div><fieldset>

			<legend>Employment Status</legend>

			<div><label>
				<input type="radio" [(ngModel)]="person.employmentStatus" name="personEmploymentStatus" value="active">
				Active
			</label></div>
			<div><label>
				<input type="radio" [(ngModel)]="person.employmentStatus" name="personEmploymentStatus" value="inactive">
				Inactive
			</label></div>
			<div><label>
				<input type="radio" [(ngModel)]="person.employmentStatus" name="personEmploymentStatus" value="retired">
				Retired
			</label></div>

		</fieldset></div>
		<div><label>
			State of Residency:
			<select [(ngModel)]="person.stateOfResidency" name="personStateOfResidency">
				<option value="">Select One...</option>
				<option *ngFor="let state of states" [value]="state.code">{{state.name}}</option>
			</select>
		</label></div>
		<div><label>
			Comments: <textarea name="personComments" [(ngModel)]="person.comments"></textarea>
		</label></div>
		<button type="button" (click)="submit()">Submit</button>
	</form>`,
	styles: [
		'input.ng-invalid.ng-touched { border: 2px solid red; }'
	]
})
export class AppComponent {

	states = [
		{ code: 'TX', name: 'Texas' },
		{ code: 'VA', name: 'Virginia' },
		{ code: 'PR', name: 'Puerto Rico' }
	];

	person: Person = {
		firstName: '',
		lastName: '',
		age: undefined,
		usCitizen: true,
		stateOfResidency: '',
		employmentStatus: '',
		comments: '',
	};

	submit() {
		console.dir(this.person);
	}

}
