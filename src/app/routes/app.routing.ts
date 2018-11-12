import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from '../components/signup/signup.component';
import { MyWorkComponent } from '../components/my-work/my-work.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HeaderComponent,
     children: [
        {path: 'profile', component: ProfileComponent},
        {path: 'signup', component: SignupComponent},
        {path: 'mywork', component: MyWorkComponent}
    ]},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}