import { MaterialModule } from './main/shared/material.module';
import { DatePipe } from '@angular/common';
import { TodoListComponent } from './main/content/todo-list/todo-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './main/services/todo.service';
import { TodoComponent } from './main/content/todo-list/todo/todo.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoDirective } from './main/shared/directives/todo.directive';
import {TodoPipe} from './main/shared/pipes/todo-pipe';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './main/login/login.component';
import { SignupComponent } from './main/signup/signup.component';
import { ContentComponent } from './main/content/content.component';
import { HeaderComponent } from './main/navigation/header/header.component';
import { LoginModalComponent } from './main/login/login-modal/login-modal.component';
import { SignupModalComponent } from './main/signup/signup-modal/signup-modal.component';
import { DashboardComponent } from './main/content/dashboard/dashboard.component';
import { ProfileComponent } from './main/content/profile/profile.component';
import { MainComponent } from './main/main.component';
import { AddGroupComponent } from './main/content/todo-group/add-group/add-group.component';
import { ViewGroupComponent } from './main/content/todo-group/view-group/view-group.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    TodoDirective,
    TodoPipe,
    SignupComponent,
    LoginComponent,
    ContentComponent,
    HeaderComponent,
    LoginModalComponent,
    SignupModalComponent,
    DashboardComponent,
    ProfileComponent,
    MainComponent,
    AddGroupComponent,
    ViewGroupComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule
  ],
  entryComponents: [
    SignupComponent,
    SignupModalComponent,
    LoginComponent,
    LoginModalComponent
  ],
  providers: [TodoService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
