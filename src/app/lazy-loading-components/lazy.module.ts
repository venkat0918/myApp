
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {  RouteComponent} from './route/route.component'
import { Comp3Component } from "./comp3/comp3.component";
import { Comp2Component } from "./comp2/comp2.component";
import { Comp1Component } from "./comp1/comp1.component";
import { LazyRoutingModule } from "./lazy-router";

@NgModule({
  imports: [CommonModule, LazyRoutingModule],
  declarations: [RouteComponent,Comp3Component,Comp2Component,Comp1Component]
})
export class PostsModule {}