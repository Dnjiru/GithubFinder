import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  profile:any[];
  repos:any[]; 
  username:string;


  constructor(private dataService: DataService) {
    this.dataService.getProfile().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.dataService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })

   }


   searchUser(){
     this.dataService.updateProfile(this.username);
     this.dataService.getProfile().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.dataService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
   }

  ngOnInit() {
  }

}
