import { NgModule,Component } from '@angular/core';
//import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Fullstack project - Angular';
  arrRand = new Array();
  min=1;
  max=100;
  count: number = 10;
  newNum: number;
  msg : string;
  redNum: number;
  showCheck: boolean = true;


  ngOnInit() { 
    this.randomString();
  }

 //random number
  randomString() {
    for (let index = 1; index < this.count; index++) {
      this.arrRand.push(Math.floor(Math.random() * this.max + 1 ));
    }
  }
//add new number from the input :)
  addNewNumber()
  {
    this.msg = "";
    if(this.newNum != null && this.newNum >= this.min && this.newNum <= this.max) {
      this.arrRand.push(this.newNum);
      this.newNum = null;
    }
    else {
      this.msg = "The number cannt big then "+ this.max+ " or small then "+ this.min+" or null";
    }
  }

  //mark the number if it exist(in showcheck..)
  RedThisNumber(){
    if(this.arrRand.find(x => x == this.newNum)){
      this.redNum=this.newNum;
      this.showCheck = false;
    }
  }
//remove the mark 
  RemoveRedNumbers(){
    this.redNum =-1;
  }
  DeleteRedNumber()
  {
    const index1:number =this.arrRand.indexOf(this.newNum)
    if(this.arrRand.find(x => x == this.newNum)){
      this.arrRand.splice(index1,1);
      this.newNum = null;}
    else 
      this.msg = "The number not exist";
  }
}
