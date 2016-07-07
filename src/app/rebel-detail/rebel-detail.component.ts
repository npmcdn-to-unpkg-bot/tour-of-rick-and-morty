import {
    Component,
    Input,
    OnInit,
    OnDestroy
} from '@angular/core';
import {
    ActivatedRoute
} from '@angular/router';
import {
    Rebel
} from '../shared/rebel';
import {
    RebelService
} from '../rebel.service';

@Component({
    moduleId: module.id,
    selector: 'app-rebel-detail',
    templateUrl: 'rebel-detail.component.html',
    styleUrls: ['rebel-detail.component.css']
})


export class RebelDetailComponent {

    @Input() rebel: Rebel;
  
    sub;
    constructor(
        private rebelService: RebelService,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']
            this.rebelService.getRebel(id)
                .then(rebel => this.rebel = rebel)
        });


    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    
    goBack(){
      window.history.back();
    }


}