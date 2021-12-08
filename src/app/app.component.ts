import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCalculator';
  number = 55
  arr = [5,7,9]

  myObj = {name: "TV", params: {w: 300, h:450}}
  img1="https://pngimg.com/uploads/smiley/smiley_PNG36233.png"

  str ='1111111';

  onInput1(event:any)
  {
    this.str = event.target.value;
  }

  onBlur(value:string)
  {
    this.str = value;
  }

}
