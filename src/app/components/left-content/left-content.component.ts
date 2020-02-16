import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.css']
})
export class LeftContentComponent implements OnInit {

  fields: Array<any> = [
    {
      id: 1,
      name: 'Field 1',
      creationDate: '12/12/2018'
    },
    {
      id: 2,
      name: 'Field 2',
      creationDate: '09/12/2018'
    },
    {
      id: 3,
      name: 'Field 3',
      creationDate: '10/12/2018'
    },
    {
      id: 4,
      name: 'Field 4',
      creationDate: '05/01/2019'
    },
    {
      id: 4,
      name: 'Field 4',
      creationDate: '05/01/2019'
    },
    {
      id: 4,
      name: 'Field 4',
      creationDate: '05/01/2019'
    },
    {
      id: 4,
      name: 'Field 4',
      creationDate: '05/01/2019'
    },
    {
      id: 4,
      name: 'Field 4',
      creationDate: '05/01/2019'
    },
    {
      id: 4,
      name: 'Field 4',
      creationDate: '05/01/2019'
    },
    {
      id: 4,
      name: 'Field 4',
      creationDate: '05/01/2019'
    },{
      id: 4,
      name: 'Field 4',
      creationDate: '05/01/2019'
    },
    {
      id: 4,
      name: 'Field 4',
      creationDate: '05/01/2019'
    },
    {
      id: 4,
      name: 'Field 4',
      creationDate: '05/01/2019'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
