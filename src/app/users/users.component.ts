import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  profile:any[];
  avatar_url:any;

  constructor(private dataService: DataService) {
    this.dataService.getProfile().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
   }

  ngOnInit() {
  }

}
