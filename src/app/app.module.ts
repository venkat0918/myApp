import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileComponent } from './components/profile/profile.component';
import{MatCardModule} from '@angular/material'
import { AppRoutingModule } from './routes/app.routing';
import{RouterModule} from '@angular/router'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    //
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
