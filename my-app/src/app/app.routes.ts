import { Routes } from '@angular/router';
import { RouteaboutchcomponetComponent } from './routeaboutchcomponet/routeaboutchcomponet.component';
import { RoutecontactcomponetComponent } from './routecontactcomponet/routecontactcomponet.component';
import { RoutelogincomponetComponent } from './routelogincomponet/routelogincomponet.component';

export const routes: Routes = [
  { path: '', component: RoutelogincomponetComponent }, // <-- Add this line
  { path: 'about', component: RouteaboutchcomponetComponent },
  { path: 'contact', component: RoutecontactcomponetComponent },
  { path: 'login', component: RoutelogincomponetComponent }
];
