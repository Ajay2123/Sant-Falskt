import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { FormComponent } from './Components/form/form.component';
import { ResultComponent } from './Components/result/result.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'dashboard', component: DashboardComponent },
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
