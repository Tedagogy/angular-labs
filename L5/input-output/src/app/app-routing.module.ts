import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParentToChildComponent} from "./components/parent-to-child/parent-to-child.component";
import {ChildToParentComponent} from "./components/child-to-parent/child-to-parent.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path: "parent-to-child", component: ParentToChildComponent},
  {path: "child-to-parent", component: ChildToParentComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
