import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

import { AlumnosComponent } from './pages/alumnos/alumnos.component';
// import { AlumnoDetalleComponent } from './pages/alumnos/alumno-detalle/alumnos-detalle.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { InscripcionesModule } from './pages/inscripciones/inscripciones.module';
import { AbmInscripcionesComponent } from './pages/inscripciones/abm-inscripciones/abm-inscripciones.component';

import { AdminGuard } from '../auth/guards/admin.guard';
// import { PagesComponent } from './pages/pages.component';
import { AbmCursosComponent } from './pages/cursos/abm-cursos/abm-cursos.component';
import { InscripcionesComponent } from './pages/inscripciones/inscripciones.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,

    RouterModule.forChild([
      {
        path: 'alumnos',
        loadChildren: () =>
          import('./pages/alumnos/alumnos.module').then((m) => m.AlumnosModule),
      },
      {
        path: 'cursos',
        loadChildren: () =>
          import('./pages/cursos/cursos.module').then((m) => m.CursosModule),
      },
    ]),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
