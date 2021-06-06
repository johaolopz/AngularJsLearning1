import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

/*Aquí ponemos las rutas*/
const routes: Routes = [
  {
    path:'',
    component: UserListComponent
  },
  {
      path:'detail',
      component: UserDetailComponent
  }
];

@NgModule({
  //cambiamos forRoot a forChild o rutas hijas
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
