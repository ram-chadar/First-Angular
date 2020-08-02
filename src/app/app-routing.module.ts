import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BranchListComponent} from './branch-list/branch-list.component';
import {SubjectListComponent} from './subject-list/subject-list.component';
const routes: Routes = [
    {
        path: 'branches',
        component: BranchListComponent
    }, {
        path: 'subjects',
        component: SubjectListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})export class AppRoutingModule {}
export const routingComponents = [BranchListComponent, SubjectListComponent];
