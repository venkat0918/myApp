import { NotesComponent } from './../components/notes/notes.component';
import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from '../components/signup/signup.component';
import { MyWorkComponent } from '../components/my-work/my-work.component';
import { LoginComponent } from '../components/login/login.component';
import { ComponentsComponent } from '../components/components.component';

console.log('app routing ',localStorage.getItem('data'))


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', component: HeaderComponent,
        children: [
            // { path: '', redirectTo: 'dashboard',pathMatch:'full', component: DashboardComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'mywork', component: MyWorkComponent },
            { path: 'login', component: LoginComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'notes', component: NotesComponent },
            { path: 'datatable', component: ComponentsComponent }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }