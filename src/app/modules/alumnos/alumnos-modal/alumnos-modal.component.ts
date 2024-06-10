import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { setTimeout } from 'timers/promises';
import { IAlumno } from '../../../core/models/IAlumno';

@Component({
  selector: 'app-alumnos-modal',
  standalone: true,
  imports: [FormsModule,InputTextModule, FloatLabelModule, ButtonModule],
  templateUrl: './alumnos-modal.component.html',
  styleUrl: './alumnos-modal.component.scss'
})
export class AlumnosModalComponent implements OnInit{


  alumno: IAlumno = {
    idAlumno: 0,
    codigo:'',
    correoInstitucional: '',
    documentoIdentidad: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    direccion: '',
    fechaNacimiento: '',
    sexo: ''
  };

  ngOnInit(): void {
   
  }



  
}
