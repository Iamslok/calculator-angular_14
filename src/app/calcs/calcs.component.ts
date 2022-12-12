import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { calcsItem } from '../Models/localstorage-model';

@Component({
  selector: 'app-calcs',
  templateUrl: './calcs.component.html',
  styleUrls: ['./calcs.component.css']
})
export class CalcsComponent implements OnInit {
  historyItems!: calcsItem
  private number1: string='';
  private number2: string='';
  private result: number=0;
  private operation: string='';
  firstitem: string | undefined;
  seconditem: string | undefined;
  thirditem: string | undefined;
  fourthitem: number | undefined;
  data: string='';
  show = false
  historyList:calcsItem[]=[]

  constructor(private CalculatorService: CalculatorService) { }

  ngOnInit() {
    this.clear();
  }

  /**
   * Initialize all operators to default values.
   *
   * @return void
   */
  clear(): void {
    this.number1 = '';
    this.number2 = '';
    this.result = 0;
    this.operation = '';
    this.data = '';
    this.show = false
  }

  /**
   * Adds the selected number to the calculation later.
   *
   * @param string number
   * @return void
   */
  addNumber(number: string): void {
    if (this.operation === '') {
      this.number1 = this.concatenateNumber(this.number1, number);
    } else {
      this.number2 = this.concatenateNumber(this.number2, number);
    }
  }

  /**
   * Returns the concatenated value. Handles the decimal separator.
   *
   * @param string actualNumber
   * @param string concatNumber
   * @return string
   */
  concatenateNumber(actualNumber: string, concatNumber: string): string {
    // caso contenha apenas '0' ou null, reinicia o valor
    if (actualNumber === '0' || actualNumber === '') {
      actualNumber = '';
    }

    // first digit is '.', concatenates '0' before the dot
    if (concatNumber === '.' && actualNumber === '') {
      return '0.';
    }

    // case '.' typed and already contains a '.', it just returns
    if (concatNumber === '.' && actualNumber.indexOf('.') > -1) {
      return actualNumber;
    }

    return actualNumber + concatNumber;
  }

  /**
   * Executes logic when an operator is selected.
   * If you already have an operation selected, execute the
   * previous operation, and defines the new operation.
   *
   * @param string operation
   * @return void
   */
  setOperation(operation: string): void {
    // only defines the operation if there is no
    if (this.operation === '') {
      this.operation = operation;
      return;
    }

    /* case operation defined and number 2 selected,
        perform the calculation of the operation */
    if (this.number2 !== '') {
      this.result = this.CalculatorService.calculate(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operation);
      this.operation = operation;
      this.number1 = this.result.toString();
      this.number2 = "";
      this.result = 0;
    }
  }

  /**
   * Performs the calculation of an operation.
   *
   * @return void
   */
  calculate(): void {
    if (this.number2 === '') {
      return;
    }

    this.result = this.CalculatorService.calculate(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operation);
  }

  /**
   * Returns the value to be displayed on the calculator screen.
   *
   * @return string
   */
  get display(){

    this.result.toString();
    this.number2;
    this.operation;
    this.number1;
    this.addToHistory();
    if(this.result > 0 || this.result < 0){
      this.data = " = " + this.result;
    }
    return this.number1 +" "+ this.operation +" "+ this.number2 + "" + this.data;
  }

  addToHistory(){
    var item = new calcsItem;
    item.num1 = this.number1;
    item.num2 = this.number2;
    item.operators = this.operation;
    item.Total = this.result
    localStorage.setItem('localCartItems', JSON.stringify(item));
  }

  getHistory(){
    this.show = !this.show;
    var res = localStorage.getItem('localCartItems');
    this.historyItems = JSON.parse(res?res:'');
    if(this.historyItems){
      this.historyList?.push(this.historyItems)
    }
  }

}
