import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FeatureRoutingModule } from './auth-routing.module';
import { AuthService } from 'src/app/core/services/auth.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
