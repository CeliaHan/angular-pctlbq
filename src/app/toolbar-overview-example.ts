import { Component } from '@angular/core';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'toolbar-overview-example',
  templateUrl: 'toolbar-overview-example.html',
  styleUrls: ['toolbar-overview-example.css'],
})
export class ToolbarOverviewExample {
  input: string = '';
  user: People = { id: '', name: '', number: '000' };
  isPrint: boolean = false;

  getUser() {
    this.user = USER_LIST.filter((item) => item.id === this.input)[0];
  }

  print() {
    this.isPrint = true;
    window.setTimeout(() => {
      window.print();
      this.isPrint = false;
    }, 500);
  }
}

const USER_LIST = [
  { id: '124444', name: '111', number: '011' },
  { id: '224444', name: '222', number: '222' },
];

interface People {
  id: string;
  name: string;
  number: string;
}
