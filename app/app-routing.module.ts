import { ViewGroupComponent } from './main/content/todo-group/view-group/view-group.component';
import { AddGroupComponent } from './main/content/todo-group/add-group/add-group.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './main/content/profile/profile.component';
import { DashboardComponent } from './main/content/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '',
    component: MainComponent,
    children: [
      {path: '', component: DashboardComponent },
      {path: 'home', component: DashboardComponent },
      {path: 'profile/:userId', component: ProfileComponent },
      {path: 'addGroup/:userId', component: AddGroupComponent},
      {path: 'viewGroup/:groupId', component: ViewGroupComponent},
      {path: 'editGroup/:userId/:groupId', component: AddGroupComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
