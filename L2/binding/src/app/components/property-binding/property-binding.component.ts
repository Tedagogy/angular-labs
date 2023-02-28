import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  /**
   * These two variables are bound to the HTML template. That means that the component will always display these
   * two values, and the site will update as these values update.
   *
   * Check out the HTML file in this component to see how the variables are bound.
   */
  tsVariable1: String = "this value was obtained from the TypeScript file.";
  tsVariable2: String = "this variable should be bound to the site.."

  constructor() { }

  ngOnInit(): void {
  }

}
