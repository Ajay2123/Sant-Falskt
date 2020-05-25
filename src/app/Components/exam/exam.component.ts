import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FileManagerService } from 'src/app/Services/fileManagerService/file-manager.service';

@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit, AfterViewInit {
    @Input() currentSubject;
    questionsList: any;
    currentQuestionIndex: any;
    currentQuestion: any;
    answerSheet: any;
    examCompleted: boolean;
    constructor(private fileManager: FileManagerService) { }
    ngOnInit() {
        this.examCompleted = false;
        console.log(this.currentSubject);
        this.answerSheet = [];
        this.currentQuestionIndex = 0;
        this.fileManager.getData(this.currentSubject).then((x: any) => {
            if (x.data) {
                this.questionsList = x.data;
                this.setQuestion();
            } else {
                console.log("Error loading questions");
            }
        });
    }
    ngAfterViewInit() {

    }
    nextQuestion() {
        if (!this.isValidNextQuesiton()) { this.completeExam(); return; }
        this.currentQuestionIndex++;
        this.setQuestion();
    }
    isValidNextQuesiton() {
        return this.currentQuestionIndex + 1 <= this.questionsList.List.length - 1 ? true : false;
    }
    completeExam() {
        this.answerSheet.push(this.currentSubject);
        this.examCompleted = true;
    }
    setQuestion() {
        this.currentQuestion = this.questionsList.List[this.currentQuestionIndex];
        this.shuffleAnswers();
    }
    shuffleAnswers() {
        this.currentQuestion.Answer.sort(() => Math.random() - 0.5);
    }
    selectedAnswer(_answerKey) {
        const data = { questionKey: this.currentQuestionIndex + 1, answerKey: _answerKey };
        this.answerSheet.push(data);
        this.nextQuestion();
    }
}
