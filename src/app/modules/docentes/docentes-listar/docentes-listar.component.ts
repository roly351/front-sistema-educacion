import { Component, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { IDocente } from '../../../core/models/IDocente';
import { Button, ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService,DynamicDialogRef } from 'primeng/dynamicdialog';
import { DocentesModelComponent } from '../docentes-model/docentes-model.component';
import { FooterModalComponent } from '../../../shared/components/footer-modal/footer-modal.component';
import { TYPE_MODAL_CREAR, TYPE_MODAL_EDITAR, TYPE_MODAL_VER } from '../../../shared/utils/constants';
import { HomeComponent } from '../../../pages/home/home.component';


@Component({
  selector: 'app-docentes-listar',
  standalone: true,
  imports: [TableModule,ButtonModule,IconFieldModule,InputIconModule,InputTextModule],
  templateUrl: './docentes-listar.component.html',
  styleUrl: './docentes-listar.component.scss',
  providers: [DialogService]
})
export class DocentesListarComponent {
  constructor(
    private dialogService: DialogService
  ){

  }
  @ViewChild('tblDocentesListar') tblDocentesListar: Table | undefined;


  ref: DynamicDialogRef | undefined;

  docentes: IDocente[] =[{
    idDocente:1,
    documentoIdentidad:'72567788',
    codigo: '20202415',
    nombres: 'Nicolas',
    apellidoPaterno: 'Coras',
    apellidoMaterno: 'Felix',
    correoInstitucional: 'nicolas@sise.edu.pe',
    direccion:'Santa Beatriz',
    fechaNacimiento:'19/12/2000',
    sexo:'M',
    especialidad:'Sistemas'

  },{
    idDocente:2,
    documentoIdentidad:'72569900',
    codigo: '20202415',
    nombres: 'Anthony',
    apellidoPaterno: 'Flores',
    apellidoMaterno: 'Barboza',
    correoInstitucional: 'anthony@sise.edu.pe',
    direccion:'Santa Beatriz',
    fechaNacimiento: '19/12/2000',
    sexo:'M',
    especialidad:'administracion'
  }]

  applyFilterGlobal($event:any, stringVal:string) {
    this.tblDocentesListar?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  onClickCrearDocente(){
    console.log('onClickCrearDocente')
    this.ref =this.dialogService.open(DocentesModelComponent,
      {
        header:'Crear un  Docente ',
        width: '80vw',
        height: '80vh',
        templates:{
          footer: FooterModalComponent
        },
        data: {
          typeModal: TYPE_MODAL_CREAR,
          data: undefined
        }
      }
    );
    this.ref.onClose.subscribe((data:any)=>{
      console.log('SE HA CERRADO EL MODAL:',data);
    })
  }
  onClickVerDocente(docente:IDocente){
    console.log('onClickVerDocente',docente);
    this.ref = this.dialogService.open(DocentesModelComponent,
      {
        header:'Información de Docente', 
        width: '80vw',
        height: '80vh',
        templates:{
          footer: FooterModalComponent
        },
        data: {
          typeModal: TYPE_MODAL_VER,
          data: docente
        }
      }
    );
    
    this.ref.onClose.subscribe((data:any)=>{
      console.log('SE HA CERRADO EL MODAL:',data);
    })   

 }
    onClickEditarDocente(docente:IDocente){
      console.log('onClickEditarDocente',docente);
      this.ref = this.dialogService.open(DocentesModelComponent,
        {
          header:'Modificar al Docente', 
          width: '80vw',
          height: '80vh',
          templates:{
            footer: FooterModalComponent
          },
          data: {
            typeModal: TYPE_MODAL_EDITAR,
            data: docente
          }
        }
      );
      this.ref.onClose.subscribe((data:any)=>{
        console.log('SE HA CERRADO EL MODAL:',data);
      })

      }
}
