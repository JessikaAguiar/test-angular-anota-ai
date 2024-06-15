import { Routes } from '@angular/router';
import {IntroductionViewComponent} from "./views/public/introduction-view/introduction-view.component";
import {DashboardViewComponent} from "./views/private/dashboard-view/dashboard-view.component";
export const routes: Routes = [
  {path: '', component: IntroductionViewComponent },
  {path: 'dashboard', component: DashboardViewComponent },

];


