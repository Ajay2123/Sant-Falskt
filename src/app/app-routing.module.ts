import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { GeneralComponent } from './Components/general/general.component';
import { DesignComponent } from './Components/design/design.component';
import { ProgrammingComponent } from './Components/programming/programming.component';
import { SustainablityComponent } from './Components/sustainablity/sustainablity.component';


const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'general', component: GeneralComponent },
    { path: 'design', component: DesignComponent },
    { path: 'programming', component: ProgrammingComponent },
    { path: 'sustainablity', component: SustainablityComponent },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ], exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
