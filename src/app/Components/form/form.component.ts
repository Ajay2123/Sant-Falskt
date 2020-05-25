import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FileManagerService } from 'src/app/Services/fileManagerService/file-manager.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    form: FormGroup;
    @Input() answerSheet;
    showResult: boolean;
    result: {};
    constructor(private fb: FormBuilder, private fileManager: FileManagerService) { }
    ngOnInit() {
        this.showResult = false;
        this.form = this.fb.group({
            name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
            email: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
        });
    }
    submit() {
        const currentSUbject = this.answerSheet.pop();
        const dataObject = {
            subject: currentSUbject,
            name: this.form.get("name").value,
            email: this.form.get("email").value,
            answers: this.answerSheet
        };
        console.log(dataObject);
        this.fileManager.postFormData(dataObject).then(x => { this.result = x; this.showResult = true; console.log("received this from server: ", x); });
    }

}
