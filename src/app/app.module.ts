import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneralComponent } from './Components/general/general.component';
import { DesignComponent } from './Components/design/design.component';
import { ProgrammingComponent } from './Components/programming/programming.component';
import { SustainablityComponent } from './Components/sustainablity/sustainablity.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GeneralComponent,
    DesignComponent,
    ProgrammingComponent,
    SustainablityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
