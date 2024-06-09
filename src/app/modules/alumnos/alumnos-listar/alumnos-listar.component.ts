import { Component, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { IAlumno } from '../../../core/models/IAlumno';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService } from 'primeng/dynamicdialog';
import { AlumnosModalComponent } from '../alumnos-modal/alumnos-modal.component';


@Component({
  selector: 'app-alumnos-listar',
  standalone: true,
  imports: [TableModule, ButtonModule,IconFieldModule,InputIconModule, InputTextModule],
  templateUrl: './alumnos-listar.component.html',
  styleUrl: './alumnos-listar.component.scss',
  providers: [DialogService]
})
export class AlumnosListarComponent {

  constructor(
    private dialogService: DialogService
  ){

  }

  @ViewChild('tblAlumnosListar') tblAlumnosListar: Table | undefined;


  buttonStyle= {
    width: '2.3rem',
    height: '2.3rem',
    'margin-left': '0.5rem'
  }


  alumnos: IAlumno[] = [{
    idAlumno:1,
    documentoIdentidad:'72567788',
    codigo: '20202415',
    nombres: 'Nicolas',
    apellidoPaterno: 'Coras',
    apellidoMaterno: 'Felix',
    correoInstitucional: 'nicolas@sise.edu.pe',
    direccion:'Santa Beatriz',
    fechaNacimiento: '19/12/2000',
    sexo:'M'
  },{
    idAlumno:2,
    documentoIdentidad:'72569900',
    codigo: '20202415',
    nombres: 'Anthony',
    apellidoPaterno: 'Flores',
    apellidoMaterno: 'Barboza',
    correoInstitucional: 'anthony@sise.edu.pe',
    direccion:'Santa Beatriz',
    fechaNacimiento: '19/12/2000',
    sexo:'M'
  }];

  applyFilterGlobal($event:any, stringVal:string) {
    this.tblAlumnosListar?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  onClickCrearAlumno(){
    console.log('onClickCrearAlumno');
    this.dialogService.open(AlumnosModalComponent,
      {
        header:'Crear un Alumno', 
        width: '70vw',
        height: '80vh'
      }
    );
  }

  onClickVerAlumno(alumno: IAlumno){
    console.log('onClickVerAlumno',alumno);
    this.dialogService.open(AlumnosModalComponent,
      {
        header:'Información de Alumno', 
        width: '70vw',
        height: '80vh'
      }
    );
  }

  onClickEditarAlumno(alumno: IAlumno){
    console.log('onClickEditarAlumno',alumno);
    this.dialogService.open(AlumnosModalComponent,
      {
        header:'Modificar al Alumno', 
        width: '70vw',
        height: '80vh'
      }
    );
  }

  


}
