import { Component, OnInit  } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public inputValue:string = '';
  public taskArray : Array<object> = [{name:'1', completed:false}, {name:'2', completed:false}, {name:'3', completed:false} ];
  constructor() { }

  ngOnInit() {
    // this.addTask()
  } 

  addTask(event){
    if(event.which == 13 ){
      this.taskArray.push({name: this.inputValue, completed:false});
    }
  }
  markComplete(i, data){
    data[i].completed = !data[i].completed;
  }
}
