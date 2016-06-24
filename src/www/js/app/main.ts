import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent } from './app.component.ts';
import { Cars } from './services/cars.ts';
//import { APP_ROUTER_PROVIDER } from './routes.ts';

//bootstrap(AppComponent, [ APP_ROUTER_PROVIDER, Cars ]);
bootstrap(AppComponent, [
	HTTP_PROVIDERS, Cars, disableDeprecatedForms(), provideForms()
]);
