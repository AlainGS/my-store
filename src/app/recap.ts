const username = 'alaking';
const names: string = 'alain';
const num = 2;
const num1 : number = 3;

const suma = (a: number, b: number) => {
  return a + b;
}
suma(1,2);

export class Person{
  private age: number;
  public lastname: string;

  constructor(edad: number, apellido: string){
    this.age = edad;
    this.lastname = apellido;
  }

  public edad(): number{
    return this.age;
  }
}
const alain = new Person(38,'Gonzales');
const edad : number = alain.edad();

class Persona{
  constructor(
    public a: number,
    public ln: string
  ){}
}
const laura = new Persona(40, 'Benites');
laura.ln

export class Producto{  
  constructor(
    public codigo: string, 
    public descripcion: string, 
    public precio: number,
    public cantidad: number
  ){}
}
