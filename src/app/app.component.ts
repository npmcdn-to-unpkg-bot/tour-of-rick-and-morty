import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { RebelService } from './rebel.service'

@Component({
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES],
    providers: [RebelService],
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Tour of Rick and Morty!';
}