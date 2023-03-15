import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'stdinfo', redirectTo: 'stdinfo/index', pathMatch: 'full'},
  { path: 'stdinfo/index', component: IndexComponent },
  { path: 'stdinfo/:stdinfoId/view', component: ViewComponent },
  { path: 'stdinfo/create', component: CreateComponent },
  { path: 'stdinfo/:stdinfoId/edit', component: EditComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StdinfoRoutingModule { }
