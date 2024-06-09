let sales: number = 123_456_789;
let course: string = 'Typescript';
let is_published = true; // understands type without specifying
let level;
let numbers: number[] = [1, 2, 3];
numbers.forEach((n) => console.log('numbers', n.toString()));
let user: [number, string] = [1, 'Sohail'];
user.push(1); // issue with ts

function render(document: any) {
  console.log(document);
}

// enum Pascal Case
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log('mySize', mySize);

function calcTax(income: number, taxYear = 2024): number {
  if (taxYear < 2024) return income * 1.2;
  return income * 1.3;
}

calcTax(10_000);

// simple obj
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Sohail',
  retire: (date: Date) => {
    console.log(date);
  },
};

// obj definition with type
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let newEmployee: Employee = {
  id: 2,
  name: 'Mohammed',
  retire: (date: Date) => {
    console.log(date);
  },
};

function kgToLbs(weight: number | string): number {
  // union type
  // Narrowing
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs('10kg');

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable; // intersection type

let textBox: UIWidget = { drag: () => {}, resize: () => {} };

// literal type (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

function greet(name: String | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log('Hola!');
}

greet(null);

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// Optional property access operator
if (customer !== null) console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');
