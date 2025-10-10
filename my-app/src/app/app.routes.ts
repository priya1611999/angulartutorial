import { Routes } from '@angular/router';
import { RouteaboutchcomponetComponent } from './routeaboutchcomponet/routeaboutchcomponet.component';
import { RoutecontactcomponetComponent } from './routecontactcomponet/routecontactcomponet.component';
import { RoutelogincomponetComponent } from './routelogincomponet/routelogincomponet.component';
import { RoutehomecomponetComponent } from './routehomecomponet/routehomecomponet.component';
import { RoutepagenotfoundcomponetComponent } from './routepagenotfoundcomponet/routepagenotfoundcomponet.component';

export const routes: Routes = [
      { path: '**', component: RoutepagenotfoundcomponetComponent },
  { path: '', component: RoutehomecomponetComponent }, // <-- Add this line
  { path: 'about', component: RouteaboutchcomponetComponent },
  { path: 'contact', component: RoutecontactcomponetComponent },
  { path: 'login', component: RoutelogincomponetComponent }
];
