import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  items:MenuItem[]

  ngOnInit(): void {
        this.items = [
          {
              label: 'Home',
              items: [{
                      label: 'Home', 
                      icon: 'pi pi-fw pi-home',
                      routerLink:"home"
                  },
              ]
          },
          {
              label: 'Usuário',
              items: [{
                label: 'Usuário', 
                icon: 'pi pi-fw pi-user',
                routerLink:"usuario"
              }
            ]
          },
          {
            label: 'Estado',
            items: [{
              label: 'Estado', 
              icon: 'pi pi-fw pi-user',
              routerLink:"estados"
            }
          ]
        }
    ];
    }    
}
