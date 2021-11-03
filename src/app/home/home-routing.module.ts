import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './pages/categories/categories.component';

// Queda pendiente el lazy-load de los componentes hijos

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'categories',
        component: CategoriesComponent
      },
      {
        path:'',
        redirectTo:'categories',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
