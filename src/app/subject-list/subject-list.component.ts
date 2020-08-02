import {ColageListService} from './../colage-list.service';
import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-subject-list', template: `
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

<h2 style="text-align:center; color:red" > List of Subjects</ h2> 
<table class="table" > 
<thead > 
<tr > 
<th scope="col" > #</th > 
<th scope="col" > Subject Name</th > 
<th scope="col" > Subject Code</th > 
<th scope="col" > Action</th > 
</tr > 
</thead > 

<tbody > 
<tr > 
<th scope="row" > 1</th > 
<td > Java</td > 
<td > 4526</td > 
<td class= "btn btn-danger" > Delete</td > 
</tr > 

<tr > 
<th scope="row" > 2</th > 
<td > Angular js</td > 
<td > 6542</td >
<td class= "btn btn-danger" > Delete</td > 
</tr > 

<tr > 
<th scope="row" > 3</th > 
<td > Cloud Computing</td > 
<td > 7412</td > 
<td class= "btn btn-danger" > Delete</td > 
</tr > 

</tbody > 
</table > `, styles: []})
export class SubjectListComponent implements OnInit {

    public collages = [];
    constructor(private _collageService : ColageListService) {}

    ngOnInit() {
        this.collages = this._collageService.getCollages();
    }

}
