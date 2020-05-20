import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class FileManagerService {

    constructor(private httpService: HttpClient) { }
    getData(parameters = "") {
        const endPointUrl = "https://vw6po9273i.execute-api.us-east-1.amazonaws.com/dev/get-questions/"+parameters;
        return this.httpService.get(endPointUrl).toPromise();
    }
}
