import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputValue: string;
  toDoList: Array<string> = [];
  addTodo(): void {
    this.toDoList.push(this.inputValue);
    this.inputValue = '';
  }
}
