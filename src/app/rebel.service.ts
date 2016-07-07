import {
    Injectable
} from '@angular/core';
import {
    Rebel
} from './shared/rebel';
import {
    REBELS
} from './shared/mock-rebels';

@Injectable()
export class RebelService {

    constructor() {}
    getRebels() {
        return Promise.resolve(REBELS);
    }
    getRebelsSlowly() {
        return new Promise < Rebel[] > (resolve =>
            setTimeout(() => resolve(REBELS), 2000) // 2 seconds
        );
    }
    getRebel(id: number) {
        return this.getRebels()
            .then(rebels => rebels.filter(rebel => rebel.id === id)[0])
    }
}