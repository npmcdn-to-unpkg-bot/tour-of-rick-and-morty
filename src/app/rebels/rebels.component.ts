import { Component, OnInit } from '@angular/core';
import { Rebel } from '../shared/rebel';
import { RebelDetailComponent } from '../rebel-detail/rebel-detail.component';
import { RebelService } from '../rebel.service'



const REBELS: Rebel[] = [];

@Component({
    moduleId: module.id,
    directives: [RebelDetailComponent],
    providers: [],
    selector: 'app-rebels',
    templateUrl: 'rebels.component.html',
    styleUrls: ['rebels.component.css']
})
export class RebelsComponent implements OnInit{
    title = 'Tour of Rick and Morty!';
    public rebels = REBELS;
    selectedRebel: Rebel;

    constructor(private rebelService: RebelService){}

    getRebels(){
        this.rebelService.getRebels().then(rebels => this.rebels = rebels);
    }
    ngOnInit(){
        this.getRebels();
    }
    onSelect(rebel: Rebel) {
        this.selectedRebel = rebel;
        console.log(this.selectedRebel);
    }


}