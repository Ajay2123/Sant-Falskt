import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FileManagerService {

    constructor(private httpService: HttpClient) { }
    getData(parameters = "") {
        const endPointUrl = environment.endpoint + "get-questions/" + parameters;
        return this.httpService.get(endPointUrl).toPromise();
    }
    postFormData(dataObject: any = {}) {
        const endPointUrl = environment.endpoint + "post-exam-records";
        return this.httpService.post(endPointUrl, dataObject).toPromise();
    }
}
