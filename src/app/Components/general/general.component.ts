import { Component, OnInit } from '@angular/core';
import { FileManagerService } from 'src/app/Services/fileManagerService/file-manager.service';

@Component({
    selector: 'app-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
    questionsList: any;
    currentQuestionIndex: any;
    currentQuestion: any;
    answerSheet: any;
    constructor(private fileManager: FileManagerService) { }
    ngOnInit() {
        this.answerSheet = [];
        this.currentQuestionIndex = 0;
        this.fileManager.getData("general").then((x: any) => {
            if (x.data) {
                this.questionsList = x.data;
                this.setQuestion();
            } else {
                console.log("Error loading questions");
            }
        });
    }
    nextQuestion() {
        if (!this.isValidNextQuesiton()) { this.completeExam(); return ; }
        this.currentQuestionIndex++;
        this.setQuestion();
    }
    isValidNextQuesiton() {
        return this.currentQuestionIndex + 1 <= this.questionsList.List.length - 1 ? true : false;
    }
    completeExam() {
        alert("exam is completed");
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
