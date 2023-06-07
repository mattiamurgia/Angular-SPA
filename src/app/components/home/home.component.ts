import { Component } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  dataCard: Card[] = [
    {
      img: 'https://picsum.photos/200/300',
      title: 'One',
      description: 'djwnwnjw',
    },
    {
      img: 'https://picsum.photos/200/300',
      title: 'Two',
      description: 'lorembbekje',
    },
    {
      img: 'https://picsum.photos/200/300',
      title: 'Three',
      description: 'ddjwjqqwkqw',
    },
    {
      img: 'https://picsum.photos/200/300',
      title: 'Four',
      description: 'dwwkiwdwid',
    },
  ];
}
