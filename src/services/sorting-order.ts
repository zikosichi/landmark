import { Injectable } from '@angular/core';

@Injectable()
export class SortingOrderService {

    public n:any = 0;

    constructor() { }

    inc():number{
        this.n ++;
        return this.n;
    }

}