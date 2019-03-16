import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-government',
  templateUrl: './government.component.html',
  styleUrls: ['./government.component.scss']
})
export class GovernmentComponent implements OnInit {

  array = [
    {
      name: 'Time',
      image: 'http://img.timeinc.net/time/images/covers/europe/2009/20090216_400.jpg',
      price: '1,590'
    },
    {
      name: 'Daily news',
      image: 'http://wallstreetonparade.com/wp-content/uploads/2018/06/New-York-Daily-News-Front-Page-June-21-2018.jpg',
      price: '1,590'
    },
    {
      name: 'Daily Mail',
      image: 'https://i.guim.co.uk/img/media/c2d158b43aa5c0c352957a50530bf6df2f65e5a9/0_0_898_1200/master/898.jpg?width=380&quality=45&auto=format&fit=max&dpr=2&s=10d563a2d2054cec032a546ea4b810ba',
      price: '1,590'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
