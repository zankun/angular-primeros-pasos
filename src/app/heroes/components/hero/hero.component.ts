import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${ this.age}`;
  }

  changeHero():void{
    //throw 'Método no implementado';
    this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;

    //Este tipo de codigo escapa al ciclo de deteccion de cambios de Angular y hay que evitar usarlo, en su lugar
    //hay que utilizar siempre que sea posible el ciclo de cambios de angular con las propiedades
    //document.querySelectorAll('h1')!.forEach( element => {
    //    Element.innerHtml = '<h1>Desde Angular</h1>';
    //});
  }
}
