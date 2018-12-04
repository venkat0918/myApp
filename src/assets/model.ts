export class myModel{
    constructor(){

    }
    name: string;
    get data(){
        console.log('----get----', this.name)
        return this.name;
    }

    set data(val){
        this.name =val;
        console.log('----set----', val)
    }
}

let passcode = "secret passcode";


// export class Employee {
    
//     private _fullName: string;

//     get fullName(): string {
//         console.log("get", this._fullName);
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         console.log("set", newName);
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }
