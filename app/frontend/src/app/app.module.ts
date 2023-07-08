import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewInfluencersComponent } from './view-influencers/view-influencers.component';
import { CreateInfluencerComponent } from './create-influencer/create-influencer.component';
import { EditInfluencerComponent } from './edit-influencer/edit-influencer.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewInfluencersComponent,
    CreateInfluencerComponent,
    EditInfluencerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
