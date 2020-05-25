import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ExamComponent } from './Components/exam/exam.component';
import { FormComponent } from './Components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './Components/result/result.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        ExamComponent,
        FormComponent,
        ResultComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
