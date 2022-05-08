import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.css']
})
export class AddEditProjectComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() proj:any;
  ProjectID:string;
  ProjectName:string;
  ProjectBegin:string;
  ProjectEnd:string;
  ProjectValue:string;
  ProjectRisk: string;
  ProjectPeople:string;

  ProjectList:any=[];

  ngOnInit(): void {
    this.loadProjectList();
  }

  loadProjectList(){
    this.service.getAllProjectNames().subscribe((data:any)=>{
      this.ProjectList=data;

      this.ProjectID=this.proj.ProjectID;
      this.ProjectName=this.proj.ProjectName;
      this.ProjectBegin = this.proj.ProjectBegin;
      this.ProjectEnd = this.proj.ProjectEnd;
      this.ProjectValue = this.proj.ProjectValue;
      this.ProjectRisk = this.proj.ProjectRisk;
      this.ProjectPeople = this.proj.ProjectPeople;
    })
  }

  addProject() {
    var val = {ProjectID:this.ProjectID,
                ProjectName:this.ProjectName,
                ProjectBegin: this.proj.ProjectBegin,
                ProjectEnd: this.proj.ProjectEnd,
                ProjectValue: this.proj.ProjectValue,
                ProjectRisk: this.proj.ProjectRisk,
                ProjectPeople: this.proj.ProjectPeople};
    this.service.addProject(val).subscribe(res=>{
      alert(res.toString());
    });


  }

  updateProject() {
    var val = {ProjectID:this.ProjectID,
                ProjectName:this.ProjectName,
                ProjectBegin: this.proj.ProjectBegin,
                ProjectEnd: this.proj.ProjectEnd,
                ProjectValue: this.proj.ProjectValue,
                ProjectRisk: this.proj.ProjectRisk,
                ProjectPeople: this.proj.ProjectPeople};
    this.service.updateProject(val).subscribe(res=>{
      alert(res.toString());
});

  }

}
