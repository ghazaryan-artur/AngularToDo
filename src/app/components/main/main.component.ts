import { Component, OnInit  } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public inputValue     : string = '';
  public taskArray      : Array<any> = [{name:1111111111111111, completed:false}];
  public shownStatus    : boolean = false;
  public showAll        : boolean = true;
  public completedCount : number = 0;
  constructor() { }

  ngOnInit() { } 

  addTask(event){
    if(event.which == 13 && this.inputValue != ''){
      this.taskArray.push({name: this.inputValue, completed:false});
      this.completedCount++;
      this.inputValue = '';
    }
  }
  markComplete(data, i){
    data[i].completed = !data[i].completed;
    this.notcompletedYet(data, i);
  }

  show(trueOrFalse) {
    this.shownStatus = trueOrFalse;
    this.showAll = false;
  }

  toShowAll(){
    this.showAll = true;
  }

  deleteTask(i, Arr){
    if(Arr[i].completed == false){
      this.completedCount--;
    }
    Arr.splice(i, 1);
  }

  notcompletedYet(data, i ){
    if (data[i].completed == false){
      this.completedCount++;
    } else {
      this.completedCount--;
    }
  }
   
  clearCompleted(){
    this.taskArray = this.taskArray.filter(function(item){
      return !item.completed;
    });
  }
  markAll(){
    console.log('hello');
  }
  console(){
    console.log(this.taskArray);
  }

}