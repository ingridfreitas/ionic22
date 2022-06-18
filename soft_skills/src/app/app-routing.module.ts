import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'skill',
    loadChildren: () => import('./skill/skill.module').then( m => m.SkillPageModule)
  },
  {
    path: 'ie',
    loadChildren: () => import('./ie/ie.module').then( m => m.IePageModule)
  },
  {
    path: 'negocios',
    loadChildren: () => import('./negocios/negocios.module').then( m => m.NegociosPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'adap',
    loadChildren: () => import('./adap/adap.module').then( m => m.AdapPageModule)
  },
  {
    path: 'honest',
    loadChildren: () => import('./honest/honest.module').then( m => m.HonestPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
