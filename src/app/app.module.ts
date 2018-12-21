import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileComponent } from './components/profile/profile.component';
import{MatCardModule, MatOptionModule, MatSelectModule, MatDialogModule} from '@angular/material'
import { AppRoutingModule } from './routes/app.routing';
import{RouterModule, RouteReuseStrategy} from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { MyWorkComponent } from './components/my-work/my-work.component'
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule,MatListModule,MatIconModule,
  MatButtonModule, MatMenuModule,MatFormFieldModule, MatInputModule,MatToolbarModule, MatCheckboxModule} from '@angular/material';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { EditUserDetailsComponent } from './components/edit-user-details/edit-user-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import{AngularFireModule} from 'angularfire2'
import{AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NotesComponent } from './components/notes/notes.component';
import { ComponentsComponent } from './components/components.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import{HttpClientModule} from '@angular/common/http'
import { FirebaseComponent } from './components/firebase/firebase.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
// import { Comp1Component } from './lazy-loading-components/comp1/comp1.component';
// import { Comp2Component } from './lazy-loading-components/comp2/comp2.component';
// import { Comp3Component } from './lazy-loading-components/comp3/comp3.component';
// import { RouteComponent } from './lazy-loading-components/route/route.component';
// import { Comp2Component } from './lazy-loading-components/comp1,lazy-loading-components/comp2/comp2.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    SignupComponent,
    MyWorkComponent,
    LoginComponent,
    EditUserDetailsComponent,
    DashboardComponent,
    NotesComponent,
    ComponentsComponent,
    FirebaseComponent,
    UserinfoComponent,
    // Comp1Component,
    // Comp2Component,
    // Comp3Component,
    // RouteComponent,
    // Comp2Component
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
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCASZS-zCX-_B_M31otOLUJwpScufQzofg",
      authDomain: "myapp-1777a.firebaseapp.com",
      databaseURL: "https://myapp-1777a.firebaseio.com",
      projectId: "myapp-1777a",
      storageBucket: "myapp-1777a.appspot.com",
      messagingSenderId: "973439709552"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    NgxDatatableModule,
    MatCheckboxModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    AngularFireMessagingModule,
  ],
  providers: [],
  entryComponents: [UserinfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
