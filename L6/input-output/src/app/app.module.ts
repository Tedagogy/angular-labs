import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildToParentComponent } from './components/child-to-parent/child-to-parent.component';
import { ParentToChildComponent } from './components/parent-to-child/parent-to-child.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import {FormsModule} from "@angular/forms";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildToParentComponent,
    ParentToChildComponent,
    InputComponent,
    OutputComponent,
    ParentComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
