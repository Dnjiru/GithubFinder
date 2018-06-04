import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[];
  repos:any[]; 
  created_at:any;
  username:string;


  constructor(private dataService: DataService) {
    this.dataService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });

    this.dataService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })

   }


   searchUser(){
     this.dataService.updateUsers(this.username);
     this.dataService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });

    this.dataService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
   }

  ngOnInit() {
  }

}
