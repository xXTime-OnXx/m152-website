import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnserBauernhofPage } from './unser-bauernhof.page';

const routes: Routes = [
  {
    path: '',
    component: UnserBauernhofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnserBauernhofPageRoutingModule {}
