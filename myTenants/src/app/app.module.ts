import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantDetailsComponent } from './forms/tenant-details/tenant-details.component';
import { PersonComponent } from './forms/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    TenantDetailsComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
