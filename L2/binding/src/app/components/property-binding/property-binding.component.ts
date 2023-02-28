import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  tsVariable1: String = "this value was obtained from the TypeScript file.";
  tsVariable2: String = "this variable should be bound to the site.."

  constructor() { }

  ngOnInit(): void {
  }

}
