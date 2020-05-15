import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-general',
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
    questionsList: any;
    currentQuestionIndex: any;
    currentQuestion: any;
    constructor() { }
    ngOnInit() {
        this.getQuestions();
        this.currentQuestionIndex = 0;
        console.log(this.questionsList);
        this.setQuestion();
    }
    nextQuestion() {
        if (!this.isValidNextQuesiton()) { this.completeExam(); }
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
        console.log(this.currentQuestion);
    }
    shuffleAnswers() {
        this.currentQuestion.Answer.sort(() => Math.random() - 0.5);
    }
    getQuestions() {
        this.questionsList = {
            "List": [
                {
                    "Question": "Below git command is used to list all branches in the repository.",
                    "Answer": [
                        { key: 1, value: "branch" },
                        { key: 2, value: "ls" },
                        { key: 3, value: "showBranches" },
                        { key: 4, value: "listBranches" }
                    ]
                },
                {
                    "Question": "'Do no evil' is the tag line of .......",
                    'Answer': [
                        { key: 1, value: "Google" },
                        { key: 2, value: "Apple" },
                        { key: 3, value: "Microsoft" },
                        { key: 4, value: "Facebook" }
                    ]
                },
                {
                    "Question": "Which IT company's nickname is ' The Big Blue '",
                    "Answer": [
                        { key: 1, value: "IBM" },
                        { key: 2, value: "Facebook" },
                        { key: 3, value: "Orkut" },
                        { key: 4, value: "None of the above" }
                    ]
                },
                {
                    "Question": "What is mean by Liveware?",
                    "Answer": [
                        { key: 1, value: "People who work with the computer" },
                        { key: 2, value: "Wearable IOT gadgets" },
                        { key: 3, value: "Fake antivirus softwares" },
                        { key: 4, value: "None of the above" }
                    ]
                },
                {
                    "Question": "What is SQL?",
                    "Answer": [
                        { key: 1, value: "Structured Query Language" },
                        { key: 2, value: "Sequential Query Language" },
                        { key: 3, value: "Superior Query Language" },
                        { key: 4, value: "Serious Query Language" }
                    ]
                }
            ]
        };
    }
}
