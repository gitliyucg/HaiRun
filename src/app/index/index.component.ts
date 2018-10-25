import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


    constructor() {
    }

    ngOnInit() {
        this.scroll();
    }

    scroll() {
        if (document.documentElement.scrollTop == 0) {
            $(".headerBox").css('background-color', 'inherit');
        }
        $(document).scroll(function () {
            if ($(".headerBox").offset().top > 50) {
                $(".headerBox").css('background', '#FFFFFF');
            } else {
                $(".headerBox").css('background-color', 'inherit');
            }
        })
    }

    ngOnDestroy() {
        $(document).unbind('scroll');
        $(".headerBox").css('background', '#FFFFFF');
    }

}
