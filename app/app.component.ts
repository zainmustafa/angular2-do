import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<div class="form-group">' +
      '<h1>To-Do <small>List</small></h1>' +
    '<form role="form">'+
        '<input type="text" class="form-control" placeholder="Your Task" name="task">'+
    '</form>'+
    '<button type="button" class="btn btn btn-primary">Add</button>'+
        '</div>'+
        '<div></div>'+
    '<ul> <li *ngFor="#todo of todoList"> {{todo}} <a href="#" class="close" aria-hidden="true"></a> </li> </ul>'
})
export class AppComponent {
    remove = function (i:number) {
        debugger;
        this.todoList.slice(i,1);
    }
    todoList : Array<any> = ['Pakistan', 'India', "Bangladesh"];
}
