import { Component } from '@angular/core';
import { Person, Producto } from './recap';
import { Product} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  widthImage = 50;
  name = 'Alain';
  age = 38;  

  persona = new Person(38,'Gonzales');
  personaEdad : number = this.persona.edad();
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  names = ['alain', 'laura', 'julio']
  nombres : string[] = ['Alain', 'Laura']
  newName: string  = '';

  btnDisabled = true;
  isVisibleModal = false;
  
  product : Producto;

  articulo = {
    codigo: '',
    descripcion: '',
    cantidad : 0,
    precio: 0.0
  }
  listArticulos : Array<{codigo: string, descripcion: string, cantidad: number, precio: number}> = [];
  
  newProducto : Producto;

  products : Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colección de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  box = {
    width : 100,
    height: 100,
    background : 'red'
  }

  register = {
    name: '',
    email: '',
    password: ''
  }

  constructor(){
    this.product = new Producto('pro001','Laptop', 1025.99, 10);
    this.newProducto = new Producto('','', 0, 0.0);    
     
  }

  ////////////////////// PRODUCTO
  agregarProducto(){
    this.listArticulos.push({
      codigo: this.articulo.codigo,
      descripcion: this.articulo.descripcion,
      cantidad: this.articulo.cantidad,
      precio: this.articulo.precio
    });
    this.articulo.codigo = '';
    this.articulo.descripcion = '';
    this.articulo.cantidad = 0;
    this.articulo.precio = 0.0; 
  }

  eliminarProducto(code: string){
    this.listArticulos = this.listArticulos.filter(list => list.codigo !== code)
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

  buttonClick(event: Event){
    console.log(event.target);
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register)
  }
  

}
