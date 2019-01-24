import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked  {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('ngDoCheck')
      }
    
      ngAfterContentInit() {console.log('ngAfterContentInit') }
      ngAfterContentChecked() { console.log('ngAfterContentChecked')}
      ngAfterViewInit() { console.log('ngAfterViewInit')}
      ngAfterViewChecked() { console.log('ngAfterViewChecked')}
      ngOnDestroy() { console.log('ngOnDestroy')}
      ngOnChanges() {
        console.log('ngOnChanges')
          }
        
}
