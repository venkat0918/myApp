import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileComponent } from './components/profile/profile.component';
import{MatCardModule} from '@angular/material'
import { AppRoutingModule } from './routes/app.routing';
import{RouterModule} from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { MyWorkComponent } from './components/my-work/my-work.component'
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    SignupComponent,
    MyWorkComponent,
    //
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule,
    DragDropModule,
    MatExpansionModule,
    MatFormFieldModule, MatInputModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
