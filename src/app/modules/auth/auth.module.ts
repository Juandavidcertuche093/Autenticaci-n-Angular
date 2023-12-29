import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import {LoginComponent} from './pages/login/login.component';
import {BackgroundComponent} from './components/background/background.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {RegisterComponent} from './pages/register/register.component';
import {ForgoPasswordFormComponent} from './components/forgo-password-form/forgo-password-form.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {RecoveryFormComponent} from './components/recovery-form/recovery-form.component';
import {RecoveryComponent} from './pages/recovery/recovery.component'



@NgModule({
    declarations: [
      LoginComponent,
      BackgroundComponent,
      FooterComponent,
      HeaderComponent,
      LoginFormComponent,
      RegisterFormComponent,
      RegisterComponent,
      ForgoPasswordFormComponent,
      ForgotPasswordComponent,
      RecoveryFormComponent,
      RecoveryComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      AuthRoutingModule,
      ReactiveFormsModule,
      FontAwesomeModule
    ]
  })
  export class AuthModule { }