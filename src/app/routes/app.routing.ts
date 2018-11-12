import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HeaderComponent,
     children: [
        {path: '', redirectTo: 'profile', pathMatch: 'full'},
        {path: 'profile', component: ProfileComponent}
    ]},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}