import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {


  repos:any=[];
  reponame:string;


  constructor(private dataService: DataService) { 
    this.dataService.getRepoInfo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });

     
  }


  searchRepo(){
    this.dataService.updateRepos(this.reponame);
    this.dataService.getRepoInfo().subscribe(repos => {
     console.log(repos);
     this.repos = repos;
   });
   
  }


  ngOnInit() {
  }

}
