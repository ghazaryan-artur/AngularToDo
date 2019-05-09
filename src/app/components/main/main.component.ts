import { Component, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms' ;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public inputValue:string = '';
  public taskArray : Array<string> = ['1','2','3','4'];
  constructor() { }

  ngOnInit() {
    // this.addTask()
  } 

  addTask(){
    console.log(this.inputValue);
    this.taskArray.push(this.inputValue);
  }
}
