import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  array = [
    {
      name: 'Brave',
      image: 'https://www.creativindie.com/wp-content/uploads/2013/10/Brave_FilmPosters-202x300.jpg',

    },
    {
      name: 'Enchantment',
      image: 'https://www.creativindie.com/wp-content/uploads/2013/10/Enchantment-Book-Cover-Best-Seller1-197x300.jpg',

    },
    {
      name: 'Harry potter',
      image: 'https://www.creativindie.com/wp-content/uploads/2013/10/harry-potter-order-of-the-phoenix-kazu-kibuishi-cover-195x300.jpg',

    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
