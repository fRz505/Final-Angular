import { Component, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../services/alumnos.service';
import { Subject, takeUntil } from 'rxjs';
import { Alumno } from '../models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inscripcion } from '../../inscripciones/models';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumnos-detalle.component.html',
  styleUrls: ['./alumnos-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnDestroy {
  alumno: Alumno | undefined;
  inscripciones: Inscripcion[] | undefined = undefined;

  private destroyed$ = new Subject();


  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService,
    private dialogRef: MatDialogRef<AlumnoDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if (data) {
      console.log(data);
      this.alumno = data.element;
      this.inscripciones = data.inscs;
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
}
