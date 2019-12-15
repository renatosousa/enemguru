import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaratonaComponent } from './maratona/maratona.component';


const routes: Routes = [
  {path: 'maratona', component: MaratonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
