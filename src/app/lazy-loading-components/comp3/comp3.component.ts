import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { getViewData } from '@angular/core/src/render3/instructions';
// import 'rxjs/add/operator/mergeMap';
function isBigEnough(element, index, array) {
  console.log(element, index, array)
  return element >= 10;
}


function Person(first, last, age, eyecolor, array, dateArray) {
  this.firstName = first;
  this.array = array;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.dateArray = dateArray;

}


@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {



  ngDoCheck() {
console.log('ngDoCheck')
  }

  ngAfterContentInit() {console.log('ngAfterContentInit') }
  ngAfterContentChecked() { console.log('ngAfterContentChecked')}
  ngAfterViewInit() { console.log('ngAfterViewInit')}
  ngAfterViewChecked() { console.log('ngAfterViewChecked')}
  ngOnDestroy() { console.log('ngOnDestroy')}


  constructor() {
    Person.prototype.sortArray = function () {
      return this.array.sort((a, b) => a - b)
    }
    var jsonArray = [
      { title: 'The Godfather', rating: 9.2, release: '24 March 1972' },
      { title: 'The Godfather: Part II', rating: 9.0, release: null },
      { title: 'The Shawshank Redemption', rating: 9.3, release: '14 October 1994' },
    ];

    jsonArray.sort(function (a, b) {
      var dateA: any = new Date(a.release), dateB: any = new Date(b.release);
      return dateA - dateB;
    });

    Person.prototype.sortByDate = function () {
      return this.dateArray.sort((a, b) => {
        const dateA: any = a.release;
        const dateB: any = b.release;
        return dateB - dateA
      })
    }

    Person.prototype.sortByString = function () {
      return this.dateArray.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) return 1;
        if (titleA > titleB) return -1;
        return 0;
      })
    }

    let array = [2, 55, 5, 4, 6, 2, 1, 22, 11, 55, 3];
    const uniqueArray = (new Set(array))
    Person.prototype.name = function () {
      return this.firstName + " " + this.lastName
    };

    let myFather = new Person("John", "Doe", 50, "blue", array, jsonArray);

    console.log(jsonArray)
    // console.log(myFather.sortByString())
    console.log(myFather.sortByDate())
    // console.log(myFather.sortArray())
    console.log(uniqueArray)

    const dupObj = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }, { id: 1, value: 'c' }];
    const uniKeys = [...(new Set(dupObj.map(({ id }) => id)))];
    console.log(dupObj.map(({ id }) => id))

    // remove Vowles from string
    let name = "venkatanarayana kadiveti";
    let arr = Array.from(name);
    let vowles = ['a', 'e', 'i', 'o', 'u'];
    arr.filter((x, index) => {
      if (vowles.indexOf(x) != -1) {
        arr.splice(index, 1)
      }
    })
    console.log(arr.join(''))


  }

  ngOnChanges() {
console.log('ngOnChanges')
  }

  ngOnInit() {
    console.log('ngOnInit')
    let row = 5;
    let right = ' ';
    let left = ' ';
    let content = '*'
    for (let i = 0; i < row; i++) {

    }
    //remove duplicates 
    // let array = [1,2,3,4,5,6,2,5,6,1,2,3];
    // array.

    // const dupArr: any = [1, 1, 2, 3, 1];
    // const uniArr: any = [...(new Set(dupArr))];
    // console.log('--------------', uniArr)  

    // const dupObj = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }, { id: 1, value: 'a' }];
    // const uniKeys = [...(new Set(dupObj))];
    // console.log('--------------', uniKeys)
    // const d1=   [12, 5, 8, 130, 44].every(isBigEnough);   // false
    // const d2=  [12, 54, 18, 130, 44].every(isBigEnough); // true
    // console.log(d2)

    // const source = from([1, 2, 3, 4, 5]);
    // //add 10 to each value
    // const example = source.pipe(map(val => (val + 10)));

    // const subscribe = example.subscribe(val => console.log(val));
    // console.log(subscribe)
  }


}



// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Arrays</h2>

// <p id="demo"></p>

// <script>
// var row= 5;
// var left= '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'.split(';');
// var right = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'.split(';')
// var content = '*';
// var finalcontent='*';
// var j=0;
// var final='';
// var print ='';
// for(var i=0; i< row ; i++){
// for(var j=0; j<i ; j++){
// console.log('i--',i)
// console.log('j--',j)
// finalcontent = content+' '+finalcontent;
//  finalcontent = finalcontent.split(' ').splice(0,i+1).join(' ')
// console.log('---',finalcontent.split(' '))
// }

// if(j === i){
// print = print+left.join(';')+finalcontent+right.join(';')+ '<br>';

// document.getElementById("demo").innerHTML = print;
// if(left.lenth !== 0 && right.length !== 0){
// left= left.splice(1,left.length)
// right= right.splice(1,right.length)
// }
// }
// }

// </script>

// </body>
// </html>

