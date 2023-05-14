/*
// test 1
let x: string = 'this is my test';
console.log("Hello World")
console.log("Your name is: " + x);
*/

/*
// test 2
// union of types
let someValue: number | string;
someValue = 32;
console.log(`value 1: ${someValue}`);
someValue = "other value";
console.log(`value 2: ${someValue}`);
*/

/*
// test 3
// define function
const suma = (x:number, y:number) => x + y;
const resta = (m: number, n: number) => m-n;

let myFunction: (a: number,b:number) => number;
myFunction = suma;
console.log(`myFunction 1: ${myFunction(5,6)}`);
myFunction = resta;
console.log(`myFunction 1: ${myFunction(5,6)}`);
*/

/*** /
// test 4 
// interfaces
interface Employee {
    name: string;
    title: string;
}

interface Manager extends Employee {
    department: string;
    numOfEmployees: number;
    scheduleMeeting: (topic: string) => void;
}

let developer = {
    name: "Michelle",
    title: 'Senior TypeScript Developer',
    editor: `Visual Studio Code`
}

let newEmployee: Employee = developer;
/**/

/*** /
// test 5
// classes
class Developer {
    constructor() {
        this.department = "";
        this._title = "";
    }
    // public property
    department: string;

    // private property with set and get
    private _title: string;
    get title(): string {
        return this._title;
    }
    set title(newTitle: string){
        this._title = newTitle.toUpperCase();
    }

    // as well private declaration
    //#salary: number;

    documentRequirements(requirements: string): void {
        console.log(requirements);
    }
}

// can extends an interface or class...
class WebDeveloper extends Developer {
    favoriteEditor: string = "";
    writeTypeScript(): void{

    }
}

let webdev: WebDeveloper = new WebDeveloper();
webdev.department = "SoftEng";
webdev.favoriteEditor = "vscode";
/***/

// test 6
// to reference an other ts file add in the header
// the next code /// <reference path="path-to-ts.ts" />
// this information will tell the compliler that
// this other file needs to be added, otherwise
// it won't work

/*** /
// test 7
// static members
class Developer {}
class WebDeveloper extends Developer {
    static jobDescription: string = "Build coll things";
    static logFavoriteProtocol() {
        console.log('HTTPS, of course!');
    }
    logJobDescription(): void {
        console.log(WebDeveloper.jobDescription);
    }
}
// to call an static function is not necessary
// to instanciate an object
WebDeveloper.logFavoriteProtocol();
/***/

/*** /
// test 8
// modules

////person.ts
//export interface Person {}
//export function hireDeveloper() : void {}
//export default class Employee {}
//// "default" if nothing is defined, this class will be 
//// per default exported
//class Manager {} // not accessible outside the module

// the same
//person.ts
interface Person {}
function hireDeveloper() : void {}
class Employee {}
class Manager {} // not accessible outside the module

export {Person, hireDeveloper, Employee as StaffMember};

// importing a module
//player.ts
import { Person, hireDeveloper } from './person';
let human: Person;
// this import, import the default class of the other file
import Worker from '.person';
let engineer: Worker = new Worker();

// rename imports
import { StaffMember as CoWorker} from './person';
let emp: CoWorker = new CoWorker();

// import functions
import * as HR from '/person';
HR.hireDeveloper();
/***/

/*** /
// relative imports
import { Laptop } from './hardware';

// non-relative imports
import * as $ from 'jquery';
/***/

