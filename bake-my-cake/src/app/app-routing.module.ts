import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CakeRequestsComponent } from './cake-requests/cake-requests.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CakeCartComponent } from './cake-cart/cake-cart.component';
import { canDeactivateGuard } from './can-deactivate.guard';
import { authGuard } from './services/auth.guard';
import { LandingComponent } from './landing/landing.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cake-cart/:id', component: CakeCartComponent, canDeactivate: [canDeactivateGuard] },
  { path: 'cake-requests', component: CakeRequestsComponent, canActivate: [authGuard] },
  { path: 'search/:searchItem', component: LandingComponent },
  { path: 'tag/:tag', component: LandingComponent },
  { path: 'cake/:id', component: FoodpageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
