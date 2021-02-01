import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DictListComponent } from './dictionaries/pages/dict-list/dict-list.component';
import { WordsListComponent } from './words/pages/words-list/words-list.component';


const routes: Routes = [
  {
    path: 'home',
    component: DictListComponent,
  },
  {
    path: 'words',
    component: WordsListComponent,
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
