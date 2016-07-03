import { Component } from '@angular/core';
import { AppForm } from './app.form';

@Component({
    selector: 'my-app',
    template: '<app-form></app-form>',
  directives : [AppForm]
    
})

export class AppComponent {
    
}
