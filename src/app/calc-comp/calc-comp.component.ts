import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-comp',
  templateUrl: './calc-comp.component.html',
  styleUrls: ['./calc-comp.component.css']
})
export class CalcCompComponent implements OnInit {
   result:number =0

  constructor() { }

  ngOnInit(): void {
  }


  calculate(aParam:string,bParam:string,operator:string)
  {

    switch (operator)
    {
      case "+":{
        this.result = Number(aParam)+ Number(bParam)
        break;
      }
      case "-":{
        this.result = Number(aParam)- Number(bParam)
        break;
      }
      case "*":{
        this.result = Number(aParam)* Number(bParam)
        break;
      }
      case "/":{
        this.result = Number(aParam)/ Number(bParam)
        break;
      }
      case "mod":{
        this.result = Number(aParam)% Number(bParam)
        break;
      }

    }


  }

}
