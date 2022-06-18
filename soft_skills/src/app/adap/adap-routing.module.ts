import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdapPage } from './adap.page';

const routes: Routes = [
  {
    path: '',
    component: AdapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdapPageRoutingModule {}
