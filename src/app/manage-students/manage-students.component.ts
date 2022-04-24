import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-manage-students',
    templateUrl: './manage-students.component.html',
    styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {
    listStudents: any;
    

    constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

    headers = new HttpHeaders({"Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, PATCH, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "Content-Type": "text/plain"});

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      
    newStudentForm = this.formBuilder.group({
        studentId: '',
        name: '',
        mathsGrade: 0,
        englishGrade: 0,
        scienceGrade: 0
    });

    ngOnInit(): void {
        this.getStudent().subscribe(data =>{this.listStudents = data.data.Items});
        

    }

    onSubmit() {
        var url = "https://w2h97afshh.execute-api.eu-west-1.amazonaws.com/prod-v1/";
        return this.http.post(url, this.newStudentForm.value).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }

    getStudent(): Observable<any>{
        return this.http.get("https://w2h97afshh.execute-api.eu-west-1.amazonaws.com/prod-v1/students")
    }
}
