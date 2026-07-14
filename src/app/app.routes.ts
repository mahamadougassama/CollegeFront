import { Routes } from '@angular/router';
import { Acceuille } from './Principal/acceuille/acceuille';
import { Admin } from './Administrateur/admin/admin';
import { Page } from './page/page';
import { Change } from './Principal/change/change';
import { Contact } from './Les Headers/contact/contact';
import { Ressource } from './Les Headers/ressource/ressource';
import { Login } from './Administrateur/login/login';
import { Dashbord } from './Administrateur/dashbord/dashbord';
import { Inscription } from './Les Headers/inscription/inscription';

export const routes: Routes = [
   {
    path:'',
    component:Page,
    children:[
      {
        path:'',
        component:Acceuille,
        children:[
          {
            path:'',
            component:Change,
            

          },
          {
            path:'contact',
            component:Contact
          },
          {
            path:'ressource',
            component:Ressource
          },
          {
            path:'inscription',
            component:Inscription
          }
        ]
      }
      ,
      {
        path:'admin',
        component:Admin,
        children:[
            {
                path:'',
                component:Login,
            },
            {
                path:'dashbord',
                component:Dashbord
            }
        ]
      }
    ]
   }
];
