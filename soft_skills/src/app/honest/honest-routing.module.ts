import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HonestPage } from './honest.page';

const routes: Routes = [
  {
    path: '',
    component: HonestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HonestPageRoutingModule {}
