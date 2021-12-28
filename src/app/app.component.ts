import { Component, VERSION } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faChevronDown = faChevronDown;

  seletedOptionType = '';
  seletedId = '';
  seletedText = 'Click here for options!';

  showFlag: boolean = false;

  data0 = {
    id: 339,
    name: 'Tgroup',
    clientId: 'G10100000019',
    type: 'G',
    companies: [
      {
        id: 340,
        name: 'Tcomp1',
        clientId: 'I10100000063',
        groupId: 339,
        branches: [
          {
            id: 231,
            name: 'head',
            companyId: 340,
          },
        ],
      },
      {
        id: 341,
        name: 'Tcomp2',
        clientId: 'I10100000064',
        groupId: 339,
        branches: [
          {
            id: 232,
            name: 'normal',
            companyId: 341,
          },
        ],
      },
      {
        id: 342,
        name: 'Tcomp3',
        clientId: 'I10100000065',
        groupId: 339,
        branches: [
          {
            id: 233,
            name: '2normal',
            companyId: 342,
          },
          {
            id: 234,
            name: 'offshore',
            companyId: 342,
          },
        ],
      },
    ],
    branches: [],
  };

  data = {
    id: 342,
    name: 'Tcomp3',
    clientId: 'I10100000065',
    type: 'I',
    companies: [],
    branches: [
      {
        id: 233,
        name: '2normal',
        companyId: 342,
      },
      {
        id: 234,
        name: 'offshore',
        companyId: 342,
      },
    ],
  };

  onSelected(optionType, id, text) {
    this.seletedOptionType = optionType;
    this.seletedId = id;
    this.seletedText = text;
    this.showFlag = false;
  }
}
