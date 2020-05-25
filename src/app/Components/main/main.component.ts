import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    selectedSubject: any;
    constructor(private router: Router) { }

    ngOnInit() {
        this.selectedSubject = undefined;
    }
    selectSubject(subject) {
        this.selectedSubject = subject;
        console.log(subject);
    }
    refresh() {
        this.selectedSubject = undefined;
    }
    dashboard() {
        this.router.navigate(["dashboard"]);
    }
}
