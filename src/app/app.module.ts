import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from './routing/routing.module'

// Defining routes
// const routes:Routes=[
//   {path:"users",component:UsersComponent},
//   {path:"repos",component:ReposComponent},
//   {path:"",redirectTo:"/users",pathMatch:"full"},
//   {path:'**',component:NotFoundComponent}
// ]
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ReposComponent } from './repos/repos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReposComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
