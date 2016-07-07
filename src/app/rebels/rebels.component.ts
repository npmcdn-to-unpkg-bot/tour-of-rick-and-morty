import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Rebel } from '../shared/rebel';
import { RebelService } from '../rebel.service'



const REBELS: Rebel[] = [];

@Component({
    moduleId: module.id,
    directives: [],
    providers: [],
    selector: 'app-rebels',
    templateUrl: 'rebels.component.html',
    styleUrls: ['rebels.component.css']
})
export class RebelsComponent implements OnInit{
    title = 'Tour of Rick and Morty!';
    public rebels = REBELS;
    selectedRebel: Rebel;

    constructor(private rebelService: RebelService, private router: Router){}

    getRebels(){
        this.rebelService.getRebels().then(rebels => this.rebels = rebels);
    }
    ngOnInit(){
        this.getRebels();
    }
    onSelect(rebel: Rebel) {
        this.selectedRebel = rebel;
    }
    gotoDetail(){
        this.router.navigate(['/detail/', this.selectedRebel.id]);
    }

}