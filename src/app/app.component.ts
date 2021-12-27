import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  seletedClientId = 'G10100000019';
  customerType = 'G';
  data = {
    id: 339,
    name: 'Tgroup',
    clientId: 'G10100000019',
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
  };
}
