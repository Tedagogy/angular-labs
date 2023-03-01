import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentToChildComponent } from './components/parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './components/child-to-parent/child-to-parent.component';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NametagComponent} from "./components/nametag/nametag.component";

@NgModule({
  declarations: [
    AppComponent,
    ParentToChildComponent,
    ChildToParentComponent,
    HomeComponent,
    ItemComponent,
    NavbarComponent,
    NametagComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
