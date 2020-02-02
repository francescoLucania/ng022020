import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Look jQuery Animation working in action!';

    public ngOnInit() {
        $(document).ready(function () {
            $('.log-close').on('click', function () {
                $('.login-bottom').fadeOut('slow', function () {
                    $('.login-bottom').remove();
                });
            });
        });
        // scrollbar start
    }
}
