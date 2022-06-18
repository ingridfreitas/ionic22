import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IePage } from './ie.page';

const routes: Routes = [
  {
    path: '',
    component: IePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IePageRoutingModule {}
