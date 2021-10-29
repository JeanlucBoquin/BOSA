import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistryComponent } from './pages/registry/registry.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: LandingPageComponent },
            { path: 'inicio-sesion', component: LoginComponent },
            { path: 'registro', component: RegistryComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
