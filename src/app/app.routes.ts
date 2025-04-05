import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [

    {path: "", redirectTo: "home", pathMatch: "full"},

    {
        path: "home",
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },

    {
        path: "details/:id",
        loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent)
    },
];
