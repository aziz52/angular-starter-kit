import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './components';
// import { LayoutConstants } from './constants';


export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // add all the child routing here 
            // this module servers as the module which can be used to load all other modules as lazy load

            // sample module route example
            //   {
            //     path: `${LayoutConstants.routerPaths.userAccount}`,
            //     loadChildren: () => import('../account.module/account.module').then(m => m.AccountModule)
            // }

        ]
    }
];

export const LayoutRoutes = RouterModule.forChild(routes);
