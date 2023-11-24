import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

export interface User {
  id: number;
  firstname: string;
  lastname : string
  username: string;
  email: String;
  address: string;
  phone: string;
  website: string;
  company: string;
  expanded: boolean;
}

const ELEMENT_DATA: User[] = [
  {
    "id": 1,
    "firstname": "Ramya",
    "lastname": "Muthuraman",
    "username": "Ramya309",
    "email": "ramya25@gmail.com",
    "address": "Daddy's gardern, Bengaluru",
    "phone": "7339092698",
    "website": "hildegard.org",
    "company": "Accenture",
    "expanded": false
  },
  {
    "id": 2,
    "firstname": "Sri Ram",
    "lastname": "Kumar",
    "username": "Sri2903",
    "email": "sriram@gmail.com",
    "address": "Preugungalatur, chennai",
    "phone": "6339092886",
    "website": "anastasia.net",
    "company": "Filterx",
    "expanded": false
  },
  {
    "id": 3,
    "firstname": "Selva",
    "lastname": "Arun",
    "username": "Selva2512",
    "email": "selvaarun@gmail.com",
    "address": "Hebbagodi, Bangalore",
    "phone": "9003992531",
    "website": "ramiro.info",
    "company": "HCL",
    "expanded": false
  },
  {
    "id": 4,
    "firstname": "Shuruthi",
    "lastname": "Sayeeram",
    "username": "Shuru09",
    "email": "shuruthisayeeram@gmail.com",
    "address": "Karungalpalayam, Erode",
    "phone": "6588903212",
    "website": "kale.biz",
    "company": "Wipro",
    "expanded": false
  },
  {
    "id": 5,
    "firstname": "Santhiya",
    "lastname" : "Kavin",
    "username": "Sandy105",
    "email": "santhiyakavin@gmail.com",
    "address": "Ghandhi nagar, Combiatore",
    "phone": "7788456290",
    "website": "demarco.info",
    "company": "Tata Consulting Services",
    "expanded": false
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'firstname', 'lastname', 'username', 'email'];

  toggleRow(element: { expanded: boolean; }) {
    // Uncommnet to open only single row at once
    // ELEMENT_DATA.forEach(row => {
    //   row.expanded = false;
    // })
    element.expanded = !element.expanded
  }

  manageAllRows(flag: boolean) {
    ELEMENT_DATA.forEach(row => {
      row.expanded = flag;
    })
  }
  onClick() {
    throw new Error('Method not implemented.');
    }
}
