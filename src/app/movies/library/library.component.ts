import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var a = $('.movieYear a');
    for(var i = 0; i < a.length; i ++){
      a[i].index = i;
      a.click(function () {
        for(var i = 0; i < a.length; i++){
          a[i].style.color = "black";
        }
        this.style.color = "#cd0623";
      })
    }

    var b = $('.movieClass a');
    for(var i = 0; i < b.length; i ++){
      b[i].index = i;
      b.click(function () {
        for(var i = 0; i < b.length; i++){
          b[i].style.color = "black";
        }
        this.style.color = "#cd0623";
      })
    }

  }

}
