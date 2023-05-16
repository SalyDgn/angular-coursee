import { Component } from '@angular/core';
import { Etudiant } from '../eptModels';

@Component({
  selector: 'ajout-eleve',
  templateUrl: './ajout-eleve.component.html',
  styleUrls: ['./ajout-eleve.component.scss']
})
export class AjoutEleveComponent {

  etudiant:Etudiant={numero:'', prenom:'', nom:'', email:'@ept.sn',  inscrit:true}

  listEtudiants:Etudiant[]=[]

  titreStyle = {"background-color" : "cyan"}
  initForm(){
    this.etudiant = {numero:'', prenom:'', nom:'', email:'@ept.sn',  inscrit:false}
  
  }

  ajoutEtudiant(){
    this.listEtudiants.push(this.etudiant);
    this.initForm();
  }

  genTitleStyle(e:Etudiant):any{
    let res:any = {"text-decoration":"underline", "font-size":"30px"};

    if(e.inscrit){
      res.color = "red"
    }
    return res;
  }


  genClass(e:Etudiant):any{

    let res = {
      "text-danger":!e.inscrit,
      "bg-warning":!e.inscrit,
      "text-success":e.inscrit,
      "bg-info":e.inscrit
    }
    return res;
    /*if(e.inscrit){
      return 'bg-success';
    }
    else{
      return 'bg-danger text-light';
    }*/
  }
}
