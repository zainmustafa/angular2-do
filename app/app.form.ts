import { Component } from '@angular/core';

@Component({
    selector: 'app-form',
    template: '<div class="form-group">' +
      '<h1>To-Do <small>List</small></h1>' +
    '<form role="form">'+
        '<input type="text" class="form-control" (keyup.enter)="add()" placeholder="Your Task" name="task" [(ngModel)]="data">'+
    '</form>'+
    '<button type="button" (click)="add()" class="btn btn btn-primary" [disabled]="!data" >Add</button>'+
        '</div>'+
        '<div id="list">'+
    '<ul>'+
        '<li *ngFor="let todo of todoList let i=index"> {{todo}} '+
            '<a href="#" class="close" aria-hidden="true" (click)="remove(i)">×</a>'+
        ' </li>'+
    '</ul>'+
    '</div>'
})
export class AppForm {
    protected data: any = '';
    protected todoList : Array<any> = [];

    protected remove = function (i:number) {
        this.todoList.splice(i,1);
    };
    protected add = function () {
        if(this.data != ''){
            this.todoList.push(this.data);
            this.data = '';
        }
    }
}
