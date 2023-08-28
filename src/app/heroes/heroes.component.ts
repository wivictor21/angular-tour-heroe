import { Component } from '@angular/core';
//import { Hero } from 'src/hero';
import { HEROES } from '../mock-hero';
import { Hero } from 'src/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  /*hero:Hero={
    id:1,
    name:'Superman',
    edad:30,
    nombreReal:'Clark Kent',
    nacionalidad:'USA',
    poderes:'Súper fuerza, velocidad, resistencia, agilidad, reflejos, durabilidad, sentidos y longevidad.',
    creador:'Jerry Siegel'
  }*/

  heroes=HEROES

  selectedHero?:Hero;
  onMouseDownHero?:Hero
  onMouseUpHero?:Hero
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    alert("Ha seleccionado el heroe: "+hero.name)
    console.log("Selected hero:", hero);
  }
  onMouseDown(hero:Hero):void{
    this.onMouseDownHero = hero;
    alert("On Mouse Down hero:\n\n"+"Heroe: "+hero.name
    +"\nEdad: "+hero.edad
    +"\nNacionalidad: "+hero.nacionalidad
    +"\nPoderes: "+hero.poderes
    +"\nCreador: "+hero.creador)
    console.log("On Mouse Down hero:", hero);
  }
  onMouseOut():void{
    //alert('Mouse salió del área')
    console.log('Mouse salió del área');
  }

  OnMouseUp():void{
    alert("On Mouse UpHero hero")
    console.log("On Mouse UpHero hero");
  }
}