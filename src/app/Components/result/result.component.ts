import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
    @Input() result: any;
    correctAnswers: number;
    totalQuestions: number;
    percentage: number;
    constructor() {
        this.percentage = 0;
    }

    ngOnInit() {
        console.log("from result component", this.result);
        this.correctAnswers = this.result.correctAnswers;
        this.totalQuestions = this.result.questions;
        this.percentage = (this.correctAnswers / this.totalQuestions) * 100;
    }

}
