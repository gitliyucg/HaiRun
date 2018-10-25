import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(){
  }

  ngOnInit(){
    $('.dropdown').each(function () {
      $(this).mouseover(function () {
        $(this).addClass('open')
      }).mouseout(function () {
        $(this).removeClass('open')
      })
    });

    $(window).scroll(function () {
      if($(window).scrollTop() > 700){
        $("#top").fadeIn(400);
      }else {
        $("#top").fadeOut(400);
      }
    })

    $("#top").click(function() {
      $('body,html').animate({scrollTop: 0}, 500);
      return false;
    });

  }

  onDeactivate(){
    scroll(0, 0);
  }

}
