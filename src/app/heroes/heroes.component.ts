import { Component } from '@angular/core';
import { Hero } from 'src/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero:Hero={
    id:1,
    name:'Superman',
    edad:30,
    nombreReal:'Clark Kent',
    nacionalidad:'USA',
    poderes:'Súper fuerza, velocidad, resistencia, agilidad, reflejos, durabilidad, sentidos y longevidad.',
    creador:'Jerry Siegel'
  }
}
