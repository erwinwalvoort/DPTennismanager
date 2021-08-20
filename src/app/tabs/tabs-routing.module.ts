import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
      [
        {
          path: 'home',
          children:
            [
              {
                path: '',
				loadChildren: () => import('../home/home.module').then(m => m.HomePageModule )
              }
            ]
        },
        {
          path: 'schedule',
          children:
            [
              {
                path: '',
				loadChildren: () => import('../schedule/schedule.module').then(m => m.SchedulePageModule )
              }
            ]
        },{
          path: 'home',
          children:
            [
              {
                path: '',
				loadChildren: () => import('../home/home.module').then(m => m.HomePageModule )
              }
            ]
        },
        {
          path: 'ranking',
          children:
            [
              {
                path: '',
				loadChildren: () => import('../ranking/ranking.module').then(m => m.RankingPageModule )
              }
            ]
        },
        {
          path: 'game',
          children:
            [
              {
                path: '',
				loadChildren: () => import('../game/game.module').then(m => m.GamePageModule )
              }
            ]
        },
        {
          path: 'message',
          children:
            [
              {
                path: '',
				loadChildren: () => import('../message/message.module').then(m => m.MessagePageModule )
              }
            ]
        },
        {
          path: '',
          redirectTo: '/tabs/home',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'message',    
	loadChildren: () => import('../message/message.module').then(m => m.MessagePageModule )
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}