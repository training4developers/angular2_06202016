import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component.ts';
import { Cars } from './services/cars.ts';
import { APP_ROUTER_PROVIDER } from './routes.ts';

bootstrap(AppComponent, [ APP_ROUTER_PROVIDER, Cars ]);
