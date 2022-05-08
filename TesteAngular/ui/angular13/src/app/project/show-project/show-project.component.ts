import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProjectList:any=[];

  ModalTitle:string;
  proj:any;
  ActivateAddEditProjComp:boolean=false;

  ngOnInit(): void {
    this.refreshProjectList();
  }

  addClick() {
    this.proj = {
      ProjectID:0,
      ProjectName:"",
      ProjectBegin:"",
      ProjectEnd:"",
      ProjectValue:"",
      ProjectRisk:"",
      ProjectPeople:""
    }
    this.ModalTitle="Adicionando Projeto";
    this.ActivateAddEditProjComp=true;
  }

  editClick(item: any) {
    console.log(item);
    this.proj=item;
    this.ModalTitle="Editando Projeto";
    this.ActivateAddEditProjComp=true;
  }

  deleteClick(item: any){
    if(confirm('Você tem certeza?')){
      this.service.deleteProject(item.ProjectID).subscribe(data=>{
        alert(data.toString());
        this.refreshProjectList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditProjComp=false;
    this.refreshProjectList;
  }

  refreshProjectList(){
    this.service.getProjectList().subscribe(data=>{
      this.ProjectList=data;
    });
  }

}
