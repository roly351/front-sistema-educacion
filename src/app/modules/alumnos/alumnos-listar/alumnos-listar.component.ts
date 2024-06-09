import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IAlumno } from '../../../core/models/IAlumno';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-alumnos-listar',
  standalone: true,
  imports: [TableModule, ButtonModule],
  templateUrl: './alumnos-listar.component.html',
  styleUrl: './alumnos-listar.component.scss'
})
export class AlumnosListarComponent {

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
  }] 
}
