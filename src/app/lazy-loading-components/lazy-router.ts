import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  RouteComponent} from './route/route.component'
import { Comp3Component } from "./comp3/comp3.component";
import { Comp2Component } from "./comp2/comp2.component";
import { Comp1Component } from "./comp1/comp1.component";


const routes: Routes = [
    { path: "", component: Comp1Component},
    { path: "2", component: Comp2Component},
    { path: "3", component: Comp3Component},
    { path: "4", component: RouteComponent},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class LazyRoutingModule { }


