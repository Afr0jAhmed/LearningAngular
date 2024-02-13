import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3{
    color: red;  
  }`
  ]  
  //inline style is taking over
})
export class AppComponent {
  // title = 'new-component';
}
