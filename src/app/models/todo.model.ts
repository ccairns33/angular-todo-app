export class Todo {
    
    // properties inside contructors, shorthand sytax for creating class in TS
    // constructor wants to recieve params and create properties on class because of public 

    // expects to be passed into the constructor with completed being optional
    constructor(
        public text: string,
        public completed: boolean = false
    ){}
}