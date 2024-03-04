import { Component, OnInit } from '@angular/core';
import { combineLatest, zip } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent  {
  isLoading: boolean = true;

  constructor() { }

 

}