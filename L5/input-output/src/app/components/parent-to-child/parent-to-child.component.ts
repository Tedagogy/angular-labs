import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.css']
})
export class ParentToChildComponent implements OnInit {
  /**
   * These two variables will be passed into child components. Check out this component's html template as well
   * as the "input" component.
   */
  var1:string = "value passed into the child.";
  var2:string = "another value.";
  todoVar:string = "pass this variable into the child component's 'todoInput' variable.";
  constructor() { }

  ngOnInit(): void {
  }

}
