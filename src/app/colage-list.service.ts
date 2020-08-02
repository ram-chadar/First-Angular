import {
    Injectable
}
from '@angular/core';

@Injectable({ providedIn: 'root' }) export class ColageListService {

    constructor() {}

    getCollages() {
        return[{"id":1,"name":"RMD"}, {"id":2,"name":"COEP"} ];
    }
}
