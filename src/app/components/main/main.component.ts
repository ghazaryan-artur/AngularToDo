import { Component, OnInit  } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public inputValue:string = '';
  public taskArray : Array<object> = [{name:'1', completed:false}, {name:'2', completed:false}, {name:'3', completed:false} ];
  public shownStatus:boolean = false;
  public showAll:boolean = true;
  constructor() { }

  ngOnInit() {

  } 

  addTask(event){
    if(event.which == 13 ){
      this.taskArray.push({name: this.inputValue, completed:false});
    }
  }
  markComplete(i, data){
    console.log(i);
    data[i].completed = !data[i].completed;
  }

  show(trueOrFalse) {
    console.log(trueOrFalse);
    console.log('now shown completed');
    this.shownStatus = trueOrFalse;
    this.showAll = false;
  }

  toShowAll(){
    this.showAll = true  
  }
  console(){
    console.log(this.taskArray);
  }
}
