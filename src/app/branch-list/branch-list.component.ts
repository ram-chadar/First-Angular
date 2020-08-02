import {Component, OnInit} from '@angular/core';
import {ColageListService} from '../colage-list.service';

@Component({selector: 'app-branch-list', template: ` 
<h2 style="text-align:center; color:red" > List of Collages</h2 >

<table class="table" > 
<thead > 
<tr > 
<th scope="col" > Id</th > 
<th scope="col" > Collage Name</th > 
</tr > 
</thead > 

<tbody > 
<tr *ngFor="let collage of collages"> 
<td > {{collage.id}}</td > 
<td > {{collage.name}}</td > 
</tr > 

</tbody > 
</table >

<h2 style="text-align:center; color:red" > List of Branch</h2 >
<table class="table" >
<thead >
<tr >
<th scope="col" > #</th >
<th scope="col" > Name</th >
<th scope="col" > Code</th >
<th scope="col" > Action</th >
</tr >
</thead >

<tbody >
<tr >
<th scope="row" > 1</th >
<td > Computer Engg</td >
<td > 1001</td >
<td class= "btn btn-danger" > Delete</td >
</tr >

<tr >
<th scope="row" > 2</th >
<td > Information Technology</td >
<td > 1002</td >
<td class= "btn btn-danger" > Delete</td >
</tr >

<tr >
<th scope="row" > 3</th >
<td > Civil Engg</td >
<td > 1003</td >
<td class= "btn btn-danger" > Delete</td >
</tr >
</tbody >
</table > `, styles: []})export class BranchListComponent implements OnInit {

    public collages = [];
    constructor(private _collages : ColageListService) {}

    ngOnInit() {
        this.collages = this._collages.getCollages();
    }

}
