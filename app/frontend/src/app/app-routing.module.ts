import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewInfluencersComponent } from './view-influencers/view-influencers.component';

const routes: Routes = [
  { path: 'view', component: ViewInfluencersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
