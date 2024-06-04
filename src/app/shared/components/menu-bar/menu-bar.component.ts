import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [ MenubarModule, ButtonModule, MenuModule, ToastModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent implements OnInit {

  itemsMenuBar: MenuItem[] | undefined;

  itemsMenuUsuario: MenuItem[] | undefined;

  ngOnInit() {
    this.itemsMenuUsuario = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh'
          },
          {
            label: 'Export',
            icon: 'pi pi-upload'
          }
        ]
      }
    ];

    this.itemsMenuBar = [
      {
        label: 'Personas',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Alumnos',
            icon: 'pi pi-graduation-cap',
            routerLink: '/principal/alumnos'
          },
          {
            label: 'Docentes',
            icon: 'pi pi-id-card',
            routerLink: '/principal/docentes'
          }
        ]
      },
      {
        label: 'Institucion',
        icon: 'pi pi-briefcase',
        items: [
          {
            label: 'Sedes',
            icon: 'pi pi-building'
          },
          {
            label: 'Cursos',
            icon: 'pi pi-book'
          },
          {
            label: 'Clases',
            icon: 'pi pi-bookmark'
          }
        ]
      },
      {
        label: 'Administrador',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Usuarios',
            icon: 'pi pi-user'
          },
          {
            label: 'Bitacora',
            icon: 'pi pi-clipboard'
          }
        ]
      }
    ]
  }


}
