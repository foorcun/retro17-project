import { Routes } from '@angular/router';
import { Home2Component } from './pages/home2/home2.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenulerPageComponent } from './pages/menuler-page/menuler-page.component';

export const routes: Routes = [
    { path: "" , component: HomePageComponent },
    // { path: "" , component: Home2Component },
    {path: "menuler-page", component: MenulerPageComponent}
];
