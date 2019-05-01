import { Component, OnInit } from '@angular/core';
import { DataService } from '../servics/data.service';

@Component({
  selector: 'display-delete-data',
  templateUrl: './display-delete-data.component.html',
  styleUrls: ['./display-delete-data.component.scss']
})
export class DisplayDeleteDataComponent implements OnInit {

  users=[];
  constructor(public form:DataService) {
this.form.getUser().subscribe(data=>this.users=data)
   }


  ngOnInit() {
  }

  
  firstName="";
  DeleteUser(first){
    console.log(first);

    this.form.deleteUser(first).subscribe((data: any)=>console.log(data));
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].firstName==first){
        this.users.splice(i,1);
      }
    }
  }
}
