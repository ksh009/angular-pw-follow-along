import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    console.log("checbox ticked: ", this.includeLetters)
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
    console.log("checbox ticked: ", this.includeNumbers)
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
    console.log("checbox ticked: ", this.includeSymbols)
  }

  onButtonClick() {
    console.log("includeLetters", this.includeLetters)
    console.log("includeNumbers", this.includeNumbers)
    console.log("includeSymbols", this.includeSymbols)

    this.password = 'MY PASSWORD!!!';
  }

  getName() {
    return "Luke Skywalker"
  }
}
