import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DecisionComponent } from './decision/decision.component';
import { RqstEntryComponent } from './rqst-entry/rqst-entry.component';
import { SecVComponent } from './sec-v/sec-v.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'createReq', component: SecVComponent },
    { path: 'reqEntry', component: RqstEntryComponent },
    { path: 'decision', component: DecisionComponent }
];
