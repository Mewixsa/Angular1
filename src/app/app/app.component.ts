import { Component, Input } from '@angular/core';
import { IUser } from '../users';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  arr: any = [1, 45, "fdf", true];
  a: number = 5;
  protected name: string = "Yevgen"
  age: Number = 16;
  obj: any = {
    imagePath: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
  };
  fun(){
    alert("Hello World!");
    this.obj.imagePath = "https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png";
  };
  // ---- //
  users: IUser[] = [];
  constructor(){
    this.users = [
      {name : "Yevgen",surname : "Logozinski",age: 16,city : "Mariupol"},
      {name : "Yevg",surname : "Logozin",age: 161,city : "Mariup"},
      {name : "Ye",surname : "Logo",age: 165,city : "Mari"}
    ];
  }
title : string = "hello Evgen";
tittle : string = "hello Evgen";


}

