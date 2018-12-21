import { Component, OnInit } from '@angular/core';
import { Observable, from, pairs } from 'rxjs';
import { of } from 'rxjs';
// import { from } from 'rxjs/observable/from';
// RxJS v6+
import { take, map, combineAll, delay } from 'rxjs/operators';
import { interval } from 'rxjs';


import { empty, fromEvent } from 'rxjs';
import {

  switchMapTo,
  concatAll,
  count,
  scan,
  withLatestFrom,
  share
} from 'rxjs/operators';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  arrayForFrom = [
    { name: 'nani', age: 24 },
    { name: 'nani1', age: 24 },
    { name: 'nani2', age: 24 },
    { name: 'nani3', age: 24 },
    { name: 'nani4', age: 24 }

  ];
  percentage = 0;
  finished = false;
  constructor() { }

  ngOnInit() {

    this.intervalFun()
    this.progressBar()

    of(1, 2, 3).subscribe(res => {
      console.log('of--->', res);
    });

    from(this.arrayForFrom).subscribe(res => {
      console.log('from--->', res)
    });

    pairs(this.arrayForFrom).subscribe(res => {
      console.log('pairs--->', res)
    })
  }
  intervalFun() {
    const source = interval(1000).pipe(take(2));
    console.log('source--->', source)
    const example = source.pipe(
      map(val => interval(1000).pipe(map(i => `Result (${val}): ${i}`), take(5)))
    );
    console.log('example--->', example)
    const combined = example.pipe(combineAll());
    console.log('combined--->', combined)
    const subscribe = combined.subscribe(val => console.log(val));
    console.log('subscribe--->', subscribe)
  }



  progressBar() {
    const requestOne = of('first').pipe(delay(500));
    const requestTwo = of('second').pipe(delay(800));
    const requestThree = of('third').pipe(delay(1100));
    const requestFour = of('fourth').pipe(delay(1400));
    const requestFive = of('fifth').pipe(delay(1700));

    const loadButton = document.getElementById('load');
    const progressBar = document.getElementById('progress');
    const content = document.getElementById('data');


    const updateProgress = progressRatio => {
      console.log('Progress Ratio: ', progressRatio);
      progressBar.style.width = 100 * progressRatio + '%';
      this.percentage= progressRatio*100;
      if (progressRatio === 1) {
        progressBar.className += ' finished';
        this.finished = true;
      } else {
        progressBar.className = progressBar.className.replace(' finished', '');
      }
    };


    const updateContent = newContent => {
      content.innerHTML += newContent;
    };
    const displayData = data => {
      updateContent(`<div class="content-item">${data}</div>`);
    };

    // simulate 5 separate requests that complete at variable length
    const observables: Array<Observable<string>> = [
      requestOne,
      requestTwo,
      requestThree,
      requestFour,
      requestFive
    ];

    const array$ = from(observables);
    const requests$ = array$.pipe(concatAll());
    const clicks$ = fromEvent(loadButton, 'click');

    const progress$ = clicks$.pipe(
      switchMapTo(requests$),
      share()
    );

    const count$ = array$.pipe(count());

    const ratio$ = progress$.pipe(
      scan(current => current + 1, 0),
      withLatestFrom(count$, (current, count) => current / count)
    );

    clicks$.pipe(switchMapTo(ratio$)).subscribe(updateProgress);

    progress$.subscribe(displayData)
  }
}


// https://www.learnrxjs.io/operators/error_handling/catch.html