import { Component, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/dashboard/pages/cursos/cursos.component';
import { Subject, takeUntil } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inscripcion } from 'src/app/core/models/cursos-alumnos';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.scss'],
})
export class CursoDetalleComponent implements OnDestroy {
  curso: Curso | undefined = undefined;
  inscripciones: Inscripcion[] | undefined = undefined;

  private destroyed$ = new Subject();

  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private cursosService: CursosService
  // ) {
  //   this.cursosService
  //     .obtenerCursoPorId(parseInt(this.activatedRoute.snapshot.params['id']))
  //     .pipe(takeUntil(this.destroyed$))
  //     .subscribe((curso) => (this.curso = curso));
  // }

  constructor(
    private dialogRef: MatDialogRef<CursoDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if (data) {
      // console.log(data);
      this.curso = data.element;
      this.inscripciones = data.inscs;
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
}
