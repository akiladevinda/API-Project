import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-added',
  templateUrl: './recent-added.component.html',
  styleUrls: ['./recent-added.component.scss']
})
export class RecentAddedComponent implements OnInit {



  array = [
    {
      name: 'Brave',
      image: 'https://www.creativindie.com/wp-content/uploads/2013/10/Brave_FilmPosters-202x300.jpg',

    },

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
      name: 'Enchantment',
      image: 'https://www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1-197x300.jpg',

    },
    {
      name: 'Harry potter',
      image: 'https://www.creativindie.com/wp-content/uploads/2013/10/harry-potter-order-of-the-phoenix-kazu-kibuishi-cover-195x300.jpg',

    },
    {
      name: 'Daily Mail',
      image: 'https://i.guim.co.uk/img/media/c2d158b43aa5c0c352957a50530bf6df2f65e5a9/0_0_898_1200/master/898.jpg?width=380&quality=45&auto=format&fit=max&dpr=2&s=10d563a2d2054cec032a546ea4b810ba',
      price: '1,590'
    },

    {
      name: 'Brave',
      image: 'https://www.creativindie.com/wp-content/uploads/2013/10/Brave_FilmPosters-202x300.jpg',

    },

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
      name: 'Enchantment',
      image: 'https://www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1-197x300.jpg',

    },
    {
      name: 'Harry potter',
      image: 'https://www.creativindie.com/wp-content/uploads/2013/10/harry-potter-order-of-the-phoenix-kazu-kibuishi-cover-195x300.jpg',

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
