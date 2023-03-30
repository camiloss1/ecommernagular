import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './UI/components/home/home.component';
import { LoginComponent } from './UI/components/login/login.component';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { OutsideComponent } from './UI/layouts/outside/outside.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'login',
    component: OutsideComponent,
    children: [
      {
        path:'',
        component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
