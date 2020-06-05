import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/start',
        pathMatch: 'full'
      },
      {
        path: 'start',
        loadChildren: () => import('../start/start.module').then( m => m.StartPageModule)
      },
      {
        path: 'fotos',
        loadChildren: () => import('../fotos/fotos.module').then( m => m.FotosPageModule)
      },
      {
        path: 'ueber-uns',
        loadChildren: () => import('../ueber-uns/ueber-uns.module').then( m => m.UeberUnsPageModule)
      },
      {
        path: 'unser-bauernhof',
        loadChildren: () => import('../unser-bauernhof/unser-bauernhof.module').then( m => m.UnserBauernhofPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
