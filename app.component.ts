import { Component } from '@angular/core';
import {User} from './user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'form';
  public user = new User("Harshal PATEL","17/11/1995",22,"Male","CVSK","GCA165","child","02","","","","","","","","","","","","","","","","","",false,"","","","","","","","","","","","","","","","","","","","","","","","","","","","",)
}
