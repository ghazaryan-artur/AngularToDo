import { Component, OnInit  } from '@angular/core';



@Component({
  selector    : 'app-main',
  templateUrl : './main.component.html',
  styleUrls   : ['./main.component.css']
})
export class MainComponent implements OnInit {
  public inputValue     : string = '';
  public taskArray      : Array<any> = [];
  public shownStatus    : boolean = false;
  public showAll        : boolean = true;
  public completedCount : number = 0;
  constructor() { }

  ngOnInit() { } 

  addTask(event){
    if(event.which === 13 && this.inputValue != ''){
      this.taskArray.push({name: this.inputValue, completed:false});
      this.completedCount++;
      this.inputValue = '';
    }
  }

  markComplete(data, i){ // маркирует процесс как завершенный или обратно
    data[i].completed = !data[i].completed;
    this.notCompletedYet(data, i);
  }

  show(trueOrFalse, index) { // определяет показ Активных компонентов (предается false), или завершенных (предается true)
    this.shownStatus = trueOrFalse;
    this.showAll = false;
    this.makeFocus(index);
  }

  toShowAll(index){ // показывает все елементы
    this.showAll = true;
    this.makeFocus(index);
  }

  makeFocus(index){ // оставляет красный бордер после клика на другие области
    let buttonsInFooter = document.getElementsByTagName('footer')[0].getElementsByTagName("button");
    for (let i = 0; i< buttonsInFooter.length; i++){
      buttonsInFooter[i].removeAttribute('class');
    }
    buttonsInFooter[index].className = 'active';
  }

  deleteTask(i, Arr){
    if(Arr[i].completed === false){
      this.completedCount--;
    }
    Arr.splice(i, 1);
  }

  notCompletedYet(data, i ){ // счетчик незавершенных элементов
    if (data[i].completed === false){
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

  markAll(taskArray){ // harc unem this ev arandz this
      if (this.completedCount != 0){ // если хотя бы 1 не завершен, то все пометить как завершенные
        for(let i = 0; i<taskArray.length; i++){
          taskArray[i].completed = true;
        }
        this.completedCount = 0;
      } else { // если все завершенны, то всех пометить как незавершенные
        for(let i = 0; i<taskArray.length; i++){
          taskArray[i].completed = false;
        }
        this.completedCount = taskArray.length;
      }
  }

}