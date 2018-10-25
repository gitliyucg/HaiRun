import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  public show: boolean = false;

  constructor(
  ) {
  }

  ngOnInit() {
    this.tabs();
  }

  tabs(){
    var oTabs = $('.oTabs');
    var oBox = $(".oBox");
    for (var i = 0; i < oTabs.length; i++){
      oTabs[i].index = i;
      oTabs.click(function () {
        for (var i = 0; i < oTabs.length; i++){
          oTabs[i].className = 'oTabs';
          oBox[i].style.display = 'none';
        }
        this.className='oTabs tabs';
        oBox[this.index].style.display = 'block';
      })
    }
  }

  isShow(){
    this.show = true
  }

}
