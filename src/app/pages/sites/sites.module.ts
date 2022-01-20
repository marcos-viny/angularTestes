import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesRoutingModule } from './sites-routing.module';
import { SitesComponent } from './sites.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    SitesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SitesRoutingModule,
    ComponentsModule
  ]
})
export class SitesModule { }
