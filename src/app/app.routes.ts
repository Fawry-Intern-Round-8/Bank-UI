import { Routes } from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import {AccountComponent} from './components/account/account.component';

export const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent}
];
