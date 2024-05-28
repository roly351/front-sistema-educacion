import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { AlumnosListarComponent } from './modules/alumnos/alumnos-listar/alumnos-listar.component';
import { DocentesListarComponent } from './modules/docentes/docentes-listar/docentes-listar.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { 
        path: 'principal', component: MainLayoutComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'alumnos', component: AlumnosListarComponent },
            { path: 'docentes', component: DocentesListarComponent }
        ]
    },
    
];
