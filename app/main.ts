import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
//import {enableProdMode} from '@angular/core';

import { AppComponent } from './app.component';

//enableProdMode();
bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
 ]);
