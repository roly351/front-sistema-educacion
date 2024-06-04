import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Personas',
            icon: 'pi pi-users',
            items: [
              {
                label: 'Alumnos',
                icon: 'pi pi-graduation-cap'
              },
              {
                label: 'Docentes',
                icon: 'pi pi-id-card'
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
