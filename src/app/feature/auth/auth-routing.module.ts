import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent } // Default route for the feature
];

@NgModule({
    imports: [RouterModule.forChild(routes)], // forChild is used in feature modules
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
