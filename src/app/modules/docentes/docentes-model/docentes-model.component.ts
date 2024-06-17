import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { setTimeout } from 'timers/promises';
import { IDocente } from '../../../core/models/IDocente';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TYPE_MODAL_VER } from '../../../shared/utils/constants';

@Component({
  selector: 'app-docentes-model',
  standalone: true,
  imports: [FormsModule,InputTextModule, FloatLabelModule, ButtonModule],
  templateUrl: './docentes-model.component.html',
  styleUrl: './docentes-model.component.scss'
})
export class DocentesModelComponent implements OnInit {
  
  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ){
  }

  docente: IDocente = {
    idDocente: 0,
    codigo:'',
    correoInstitucional: '',
    documentoIdentidad: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    direccion: '',
    fechaNacimiento: '',
    sexo: '',
    especialidad:''
  };
  ngOnInit(): void {
    console.log('DocentesModelComponent',this.config.data);
    if(this.config.data.data){
     this.docente = this.config.data.data;
    }
   }
 
   isModoVer():boolean{
     return this.config.data.typeModal == TYPE_MODAL_VER
   }

}
