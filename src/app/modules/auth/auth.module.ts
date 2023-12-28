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



@NgModule({
    declarations: [
      LoginComponent,
      BackgroundComponent,
      FooterComponent,
      HeaderComponent,
      LoginFormComponent
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