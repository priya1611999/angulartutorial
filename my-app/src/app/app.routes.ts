import { Routes } from '@angular/router';
import { RouteaboutchcomponetComponent } from './routeaboutchcomponet/routeaboutchcomponet.component';
import { RoutecontactcomponetComponent } from './routecontactcomponet/routecontactcomponet.component';
import { RoutelogincomponetComponent } from './routelogincomponet/routelogincomponet.component';
import { RoutehomecomponetComponent } from './routehomecomponet/routehomecomponet.component';
import { RoutepagenotfoundcomponetComponent } from './routepagenotfoundcomponet/routepagenotfoundcomponet.component';
import { RouteprofilepassdatacomponetComponent } from './routeprofilepassdatacomponet/routeprofilepassdatacomponet.component';

export const routes: Routes = [
    
  { path: '', component: RoutehomecomponetComponent }, // <-- Add this line
  { path: 'about', component: RouteaboutchcomponetComponent },
  { path: 'contact', component: RoutecontactcomponetComponent },
  { path: 'login', component: RoutelogincomponetComponent },
   { path: 'profile', component: RouteprofilepassdatacomponetComponent },
  //need to pass common data to multiple component
     { path: 'profilecommon', component: RouteprofilepassdatacomponetComponent,data: { name: 'priya' } },

   { path: '**', component: RoutepagenotfoundcomponetComponent }
];
