import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductPageComponent } from './product-page/product-page.component';


export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: 'Home',
    },
    {
        path: 'login',
        component: LoginPageComponent,
        title: 'Login',
    },
    {
        path: 'register',
        component: RegisterPageComponent,
        title: 'Register',
    },
    {
        path: 'cart',
        component: CartPageComponent,
        title: 'Cart',
    },
    {
        path: 'product/:id',
        component: ProductPageComponent,
        title: 'Product Deetails'
    },
    {
        path: '**',
        component: NotFoundPageComponent,
        title: 'Not Found',
    }
];
