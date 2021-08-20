import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//const routes: Routes = [
//  { path: 'second/:price', loadChildren: './second/second.module#SecondPageModule' },
//  { path: '', redirectTo: 'home', pathMatch: 'full' },
//  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
//  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
//  {
//    path: 'tabs',
//    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
//  },
//  {
//    path: 'register',
//    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
//  }
//];
const routes: Routes = [
  {
    path: '',    
	loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule )
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
