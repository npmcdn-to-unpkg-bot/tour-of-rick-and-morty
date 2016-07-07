import {
    Component,
    OnInit
} from '@angular/core';

import {
    Rebel
} from '../shared/rebel';
import {
    RebelService
} from '../rebel.service';
import {
    Router
} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    rebels: Rebel[] = [];

    constructor(private rebelService: RebelService,
        private router: Router) {}

    ngOnInit() {
        this.rebelService.getRebels()
            .then(rebels => this.rebels = rebels.slice(0, 4));
    }

    gotoDetail(rebel: Rebel) {
        let link = ['/detail', rebel.id];
        this.router.navigate(link);
    }
}