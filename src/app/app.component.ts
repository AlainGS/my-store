import { Component } from '@angular/core';
import { Person, Producto } from './recap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Alain';
  age = 38;  

  persona = new Person(38,'Gonzales');
  personaEdad : number = this.persona.edad();
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  btnDisabled = true;
  isVisibleModal = false;
  
  product : Producto;
  constructor(){
    this.product = new Producto(1,'Laptop', 1025.99);
    
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.personaEdad = this.personaEdad+1;
  }

  showModal(){
    this.isVisibleModal = true;
  }

  hideModal(){
    this.isVisibleModal = false;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.persona.lastname = element.value;

  }

}
